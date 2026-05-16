import { useLocation, useNavigate } from 'react-router-dom'

function ArticlePage() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state) {
    navigate('/')
    return null
  }

  const { title, category, description, image, date, url } = state

  return (
    <main className="max-w-4xl mx-auto px-6 py-8">
      
      {/* Botón regresar */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm font-bold text-red-500 hover:text-red-700 transition-colors flex items-center gap-2"
      >
        ← Regresar
      </button>

      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover rounded-2xl shadow-lg mb-6"
      />

      {/* Categoría y fecha */}
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {category}
        </span>
        <span className="text-gray-400 text-sm">{date}</span>
      </div>

      {/* Título */}
      <h1 className="text-3xl font-black text-gray-800 leading-tight mb-4">
        {title}
      </h1>

      {/* Descripción */}
      <p className="text-gray-600 text-lg leading-relaxed mb-8">
        {description}
      </p>

      {/* Botón leer artículo completo */}
      
        <a href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Leer artículo completo →
      </a>

    </main>
  )
}

export default ArticlePage