const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export async function fetchNoticias(categoria = 'general') {
  const query = categoria === 'Todas' ? 'mexico' : categoria

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&language=es&sortBy=publishedAt&pageSize=6&apiKey=${API_KEY}`
  )

  const data = await response.json()

  if (data.status !== 'ok') {
    throw new Error('Error al obtener noticias')
  }

  return data.articles.map((article, index) => ({
    id: index,
    title: article.title,
    category: categoria === 'Todas' ? 'General' : categoria,
    description: article.description || 'Sin descripción disponible.',
    image: article.urlToImage || `https://picsum.photos/seed/${index}/400/250`,
    date: new Date(article.publishedAt).toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }))
}