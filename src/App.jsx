import NavBar from './components/NavBar'
import NewsCard from './components/NewsCard'
import HeroSection from './components/HeroSection'
import Sidebar from './components/Sidebar'

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
  {
    id: 4,
    title: "Descubren nueva especie marina en el Pacífico",
    category: "Ciencia",
    description: "Científicos mexicanos identificaron una criatura nunca antes vista en las profundidades del océano.",
    image: "https://picsum.photos/seed/ocean/400/250",
    date: "12 Mayo 2026"
  },
  {
    id: 5,
    title: "Inversión extranjera en México rompe récord histórico",
    category: "Economía",
    description: "El país recibió más de 40 mil millones de dólares en inversión directa durante el primer trimestre.",
    image: "https://picsum.photos/seed/economy/400/250",
    date: "11 Mayo 2026"
  },
  {
    id: 6,
    title: "Festival de cine de Guadalajara premia a directora oaxaqueña",
    category: "Cultura",
    description: "La cineasta recibió el premio mayor por su documental sobre comunidades indígenas del sur del país.",
    image: "https://picsum.photos/seed/cinema/400/250",
    date: "10 Mayo 2026"
  },
]

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <HeroSection />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Noticias */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Últimas Noticias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>

          {/* Sidebar */}
          <Sidebar />

        </div>
      </main>
    </div>
  )
}

export default App