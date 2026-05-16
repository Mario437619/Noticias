import NewsCard from '../components/NewsCard'
import HeroSection from '../components/HeroSection'
import Sidebar from '../components/Sidebar'
import FilterBar from '../components/FilterBar'

function HomePage({ noticias, cargando, error, categoriaActiva, setCategoriaActiva }) {
  return (
    <>
      <HeroSection />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Noticias */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Últimas Noticias</h2>

            <FilterBar
              categoriaActiva={categoriaActiva}
              onCategoriaChange={setCategoriaActiva}
            />

            {/* Loading */}
            {cargando && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                    <div className="w-full h-48 bg-gray-200" />
                    <div className="p-4 space-y-3">
                      <div className="h-3 bg-gray-200 rounded w-1/4" />
                      <div className="h-5 bg-gray-200 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Error */}
            {error && (
              <p className="text-red-500 text-center py-12">{error}</p>
            )}

            {/* Noticias */}
            {!cargando && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {noticias.map((noticia) => (
                  <NewsCard
                    key={noticia.id}
                    title={noticia.title}
                    category={noticia.category}
                    description={noticia.description}
                    image={noticia.image}
                    date={noticia.date}
                    url={noticia.url}
                  />
                ))}
              </div>
            )}

            {!cargando && !error && noticias.length === 0 && (
              <p className="text-gray-400 text-center py-12">No hay noticias en esta categoría.</p>
            )}
          </div>

          {/* Sidebar */}
          <Sidebar />

        </div>
      </main>
    </>
  )
}

export default HomePage