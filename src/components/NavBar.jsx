import { useNavigate } from 'react-router-dom'

function NavBar({ onCategoriaChange, modoOscuro, toggleModo }) {
  const navigate = useNavigate()

  const handleCategoria = (categoria) => {
    navigate('/')
    if (onCategoriaChange) onCategoriaChange(categoria)
  }

  return (
    <nav className={`${modoOscuro ? 'bg-gray-900' : 'bg-gray-900'} text-white px-6 py-4`}>
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <h1
          onClick={() => handleCategoria('Todas')}
          className="text-2xl font-bold text-red-500 cursor-pointer"
        >
          📰 NoticiasMX
        </h1>

        <ul className="flex gap-6 text-sm font-medium">
          {['Inicio', 'Tecnología', 'Deportes', 'Política', 'Ciencia'].map((cat) => (
            <li
              key={cat}
              onClick={() => handleCategoria(cat === 'Inicio' ? 'Todas' : cat)}
              className="hover:text-red-400 cursor-pointer transition-colors"
            >
              {cat}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Buscar noticias..."
            className="bg-gray-700 text-white text-sm px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Toggle modo oscuro */}
          <button
            onClick={toggleModo}
            className="text-xl cursor-pointer hover:scale-110 transition-transform"
            title="Cambiar modo"
          >
            {modoOscuro ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar