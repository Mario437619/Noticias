function NewsCard({ title, category, description, image, date }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Contenido */}
      <div className="p-4">
        
        {/* Categoría */}
        <span className="text-xs font-bold text-white bg-red-500 px-2 py-1 rounded-full">
          {category}
        </span>

        {/* Título */}
        <h2 className="text-lg font-bold text-gray-800 mt-2 hover:text-red-500 cursor-pointer">
          {title}
        </h2>

        {/* Descripción */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {description}
        </p>

        {/* Fecha */}
        <p className="text-xs text-gray-400 mt-3">{date}</p>

      </div>
    </div>
  )
}

export default NewsCard