import { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'
import HeroSection from '../components/HeroSection'
import Sidebar from '../components/Sidebar'
import FilterBar from '../components/FilterBar'

function HomePage({ noticias, cargando, error, categoriaActiva, setCategoriaActiva, modoOscuro }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [categoriaActiva, noticias])

  return (
    <>
      <HeroSection />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Noticias */}
          <div className="flex-1">
            <h2 className={`text-2xl font-bold mb-4 ${modoOscuro ? 'text-white' : 'text-gray-800'}`}>
              Últimas Noticias
            </h2>

            <FilterBar
              categoriaActiva={categoriaActiva}
              onCategoriaChange={setCategoriaActiva}
              modoOscuro={modoOscuro}
            />

            {/* Loading */}
            {cargando && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`rounded-xl shadow-md overflow-hidden animate-pulse ${modoOscuro ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="w-full h-48 bg-gray-600" />
                    <div className="p-4 space-y-3">
                      <div className="h-3 bg-gray-600 rounded w-1/4" />
                      <div className="h-5 bg-gray-600 rounded w-3/4" />
                      <div className="h-3 bg-gray-600 rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Error */}
            {error && (
              <p className="text-red-500 text-center py-12">{error}</p>
            )}

            {/* Noticias con animación */}
            {!cargando && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {noticias.map((noticia, index) => (
                  <div
                    key={noticia.id}
                    style={{
                      animation: visible ? `fadeUp 0.5s ease-out ${index * 0.1}s both` : 'none',
                      opacity: visible ? 1 : 0
                    }}
                  >
                    <NewsCard
                      title={noticia.title}
                      category={noticia.category}
                      description={noticia.description}
                      image={noticia.image}
                      date={noticia.date}
                      url={noticia.url}
                      modoOscuro={modoOscuro}
                    />
                  </div>
                ))}
              </div>
            )}

            {!cargando && !error && noticias.length === 0 && (
              <p className="text-gray-400 text-center py-12">No hay noticias en esta categoría.</p>
            )}
          </div>

          {/* Sidebar */}
          <Sidebar onCategoriaChange={setCategoriaActiva} modoOscuro={modoOscuro} />

        </div>
      </main>
    </>
  )
}

export default HomePage