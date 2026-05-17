const API_KEY = import.meta.env.VITE_NEWS_API_KEY

const noticiasFallback = [
  {
    id: 0,
    title: "México lidera innovación tecnológica en América Latina",
    category: "Tecnología",
    description: "Expertos internacionales reconocen el avance del ecosistema tech mexicano como uno de los más dinámicos de la región.",
    image: "https://picsum.photos/seed/tech1/400/250",
    date: "16 de mayo de 2026",
    url: "#"
  },
  {
    id: 1,
    title: "Selección mexicana clasifica al mundial con gol histórico",
    category: "Deportes",
    description: "Con un gol en el último minuto, México aseguró su boleto a la siguiente ronda del torneo internacional.",
    image: "https://picsum.photos/seed/futbol/400/250",
    date: "15 de mayo de 2026",
    url: "#"
  },
  {
    id: 2,
    title: "Descubren nueva especie marina en el Pacífico mexicano",
    category: "Ciencia",
    description: "Científicos mexicanos identificaron una criatura nunca antes vista en las profundidades del océano Pacífico.",
    image: "https://picsum.photos/seed/ocean/400/250",
    date: "14 de mayo de 2026",
    url: "#"
  },
  {
    id: 3,
    title: "Inversión extranjera en México rompe récord histórico",
    category: "Economía",
    description: "El país recibió más de 40 mil millones de dólares en inversión directa durante el primer trimestre del año.",
    image: "https://picsum.photos/seed/economy/400/250",
    date: "13 de mayo de 2026",
    url: "#"
  },
  {
    id: 4,
    title: "Festival de cine de Guadalajara premia a directora oaxaqueña",
    category: "Cultura",
    description: "La cineasta recibió el premio mayor por su documental sobre comunidades indígenas del sur del país.",
    image: "https://picsum.photos/seed/cinema/400/250",
    date: "12 de mayo de 2026",
    url: "#"
  },
  {
    id: 5,
    title: "Senado aprueba nueva ley de telecomunicaciones",
    category: "Política",
    description: "La nueva ley busca regular el uso de internet y proteger los datos personales de los ciudadanos mexicanos.",
    image: "https://picsum.photos/seed/politics/400/250",
    date: "11 de mayo de 2026",
    url: "#"
  },
]

export async function fetchNoticias(categoria = 'general') {
  const query = categoria === 'Todas' ? 'mexico' : categoria

  try {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${query}&lang=es&max=6&apikey=${API_KEY}`
    )

    const data = await response.json()

    if (!data.articles || data.articles.length === 0) {
      throw new Error('Sin artículos')
    }

    return data.articles.map((article, index) => ({
      id: index,
      title: article.title,
      category: categoria === 'Todas' ? 'General' : categoria,
      description: article.description || 'Sin descripción disponible.',
      image: article.image || `https://picsum.photos/seed/${index}/400/250`,
      date: new Date(article.publishedAt).toLocaleDateString('es-MX', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      url: article.url
    }))

  } catch {
    // Si falla la API, usar noticias de respaldo
    if (categoria === 'Todas') return noticiasFallback
    return noticiasFallback.filter(n => n.category === categoria)
  }
}