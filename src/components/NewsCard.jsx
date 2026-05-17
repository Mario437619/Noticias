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
      className={`rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 ${modoOscuro ? 'bg-gray-800' : 'bg-white'}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <span className="text-xs font-bold text-white bg-red-500 px-2 py-1 rounded-full">
          {category}
        </span>

        <h2 className={`text-lg font-bold mt-2 hover:text-red-500 transition-colors leading-tight ${modoOscuro ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h2>

        <p className={`text-sm mt-1 line-clamp-2 ${modoOscuro ? 'text-gray-400' : 'text-gray-500'}`}>
          {description}
        </p>

        <p className="text-xs text-gray-400 mt-3">{date}</p>
      </div>
    </div>
  )
}

export default NewsCard