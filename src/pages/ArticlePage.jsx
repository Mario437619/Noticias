import { useLocation, useNavigate } from 'react-router-dom'

function ArticlePage({ modoOscuro }) {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state) {
    navigate('/')
    return null
  }

  const { title, category, description, image, date, url } = state

  return (
    <div className={`min-h-screen ${modoOscuro ? 'bg-gray-950' : 'bg-gray-100'}`}>
      
      {/* Hero del artículo */}
      <div className="relative w-full h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{ animation: 'zoomIn 8s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {/* Botón regresar sobre la imagen */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 border border-white/20"
        >
          ← Regresar
        </button>
      </div>

      {/* Contenido */}
      <div className="max-w-3xl mx-auto px-6 py-8"
        style={{ animation: 'fadeUp 0.6s ease-out both' }}
      >
        {/* Categoría y fecha */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {category}
          </span>
          <span className={`text-sm ${modoOscuro ? 'text-gray-400' : 'text-gray-500'}`}>{date}</span>
        </div>

        {/* Título */}
        <h1 className={`text-4xl font-black leading-tight mb-6 ${modoOscuro ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h1>

        {/* Línea divisora */}
        <div className="w-16 h-1 bg-red-500 rounded-full mb-6" />

        {/* Descripción */}
        <p className={`text-lg leading-relaxed mb-8 ${modoOscuro ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>

        {/* Nota */}
        <div className={`rounded-2xl p-5 mb-8 border-l-4 border-red-500 ${modoOscuro ? 'bg-gray-800' : 'bg-white'}`}>
          <p className={`text-sm ${modoOscuro ? 'text-gray-400' : 'text-gray-500'}`}>
            📌 Este es un resumen del artículo. Para leer la nota completa visita la fuente original.
          </p>
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          >
            Leer artículo completo →
          </a>
          <button
            onClick={() => navigate(-1)}
            className={`font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 border ${modoOscuro ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
          >
            ← Volver
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage