import { useNavigate } from 'react-router-dom'

function NewsCard({ title, category, description, image, date, url, modoOscuro }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/article', {
      state: { title, category, description, image, date, url }
    })
  }

  return (
    <div
      onClick={handleClick}
      className={`rounded-2xl shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${modoOscuro ? 'bg-gray-800' : 'bg-white'}`}
    >
      {/* Imagen con zoom al hover */}
      <div className="overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        {/* Categoría y fecha en la misma línea */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-white bg-red-500 px-3 py-1 rounded-full">
            {category}
          </span>
          <p className="text-xs text-gray-400">{date}</p>
        </div>

        {/* Título */}
        <h2 className={`text-base font-bold mt-2 leading-tight transition-colors group-hover:text-red-500 ${modoOscuro ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h2>

        {/* Descripción */}
        <p className={`text-sm mt-2 line-clamp-2 leading-relaxed ${modoOscuro ? 'text-gray-400' : 'text-gray-500'}`}>
          {description}
        </p>

        {/* Leer más */}
        <div className="mt-4 flex items-center gap-1 text-red-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Leer más <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </div>
  )
}

export default NewsCard