import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar({ onCategoriaChange, modoOscuro, toggleModo, busqueda, setBusqueda }) {
  const navigate = useNavigate()
  const [menuAbierto, setMenuAbierto] = useState(false)

  const handleCategoria = (categoria) => {
    navigate('/')
    if (onCategoriaChange) onCategoriaChange(categoria)
    setMenuAbierto(false)
  }

  const categorias = ['Inicio', 'Tecnología', 'Deportes', 'Política', 'Ciencia']

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="flex items-center justify-between max-w-6xl mx-auto">

        {/* Logo */}
        <h1
          onClick={() => handleCategoria('Todas')}
          className="text-2xl font-bold text-red-500 cursor-pointer hover:text-red-400 transition-colors"
        >
          📰 NoticiasMX
        </h1>

        {/* Categorías — desktop */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {categorias.map((cat) => (
            <li
              key={cat}
              onClick={() => handleCategoria(cat === 'Inicio' ? 'Todas' : cat)}
              className="hover:text-red-400 cursor-pointer transition-colors relative group"
            >
              {cat}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </li>
          ))}
        </ul>

        {/* Buscador y controles — desktop */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar noticias..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="bg-gray-700 text-white text-sm px-4 py-2 pr-8 rounded-full outline-none focus:ring-2 focus:ring-red-500 w-48 transition-all focus:w-64"
            />
            {busqueda && (
              <button
                onClick={() => setBusqueda("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>
          <button
            onClick={toggleModo}
            className="text-xl cursor-pointer hover:scale-110 transition-transform"
          >
            {modoOscuro ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Botón hamburguesa — mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggleModo} className="text-xl">
            {modoOscuro ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuAbierto ? '✕' : '☰'}
          </button>
        </div>

      </div>

      {/* Menú mobile */}
      {menuAbierto && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4 space-y-3"
          style={{ animation: 'fadeUp 0.3s ease-out both' }}
        >
          <input
            type="text"
            placeholder="Buscar noticias..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full bg-gray-700 text-white text-sm px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-red-500"
          />
          <ul className="space-y-2">
            {categorias.map((cat) => (
              <li
                key={cat}
                onClick={() => handleCategoria(cat === 'Inicio' ? 'Todas' : cat)}
                className="text-sm font-medium hover:text-red-400 cursor-pointer transition-colors py-1"
              >
                → {cat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavBar