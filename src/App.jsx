import NavBar from './components/NavBar'
import NewsCard from './components/NewsCard'

const noticias = [
  {
    id: 1,
    title: "México lanza nuevo programa de energía solar",
    category: "Ciencia",
    description: "El gobierno anunció una inversión histórica para expandir paneles solares en zonas rurales del país.",
    image: "https://picsum.photos/seed/solar/400/250",
    date: "15 Mayo 2026"
  },
  {
    id: 2,
    title: "Selección mexicana clasifica al mundial",
    category: "Deportes",
    description: "Con un gol en el último minuto, México aseguró su boleto a la siguiente ronda del torneo.",
    image: "https://picsum.photos/seed/futbol/400/250",
    date: "14 Mayo 2026"
  },
  {
    id: 3,
    title: "Nueva app mexicana revoluciona los pagos digitales",
    category: "Tecnología",
    description: "Una startup de Guadalajara lanzó una aplicación que promete simplificar los pagos entre usuarios.",
    image: "https://picsum.photos/seed/tech/400/250",
    date: "13 Mayo 2026"
  },
]

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      
      <main className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Últimas Noticias</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticias.map((noticia) => (
            <NewsCard
              key={noticia.id}
              title={noticia.title}
              category={noticia.category}
              description={noticia.description}
              image={noticia.image}
              date={noticia.date}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App