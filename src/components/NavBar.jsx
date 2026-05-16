function NavBar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      
      {/* Logo / Nombre del sitio */}
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-red-500">📰 NoticiasMX</h1>

        {/* Categorías */}
        <ul className="flex gap-6 text-sm font-medium">
          <li className="hover:text-red-400 cursor-pointer">Inicio</li>
          <li className="hover:text-red-400 cursor-pointer">Tecnología</li>
          <li className="hover:text-red-400 cursor-pointer">Deportes</li>
          <li className="hover:text-red-400 cursor-pointer">Política</li>
          <li className="hover:text-red-400 cursor-pointer">Ciencia</li>
        </ul>

        {/* Buscador */}
        <input
          type="text"
          placeholder="Buscar noticias..."
          className="bg-gray-700 text-white text-sm px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

    </nav>
  )
}

export default NavBar