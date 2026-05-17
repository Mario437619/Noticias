function Footer({ modoOscuro }) {
  return (
    <footer className={`mt-12 ${modoOscuro ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>

      {/* Banda superior roja */}
      <div className="bg-red-500 py-3 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-sm font-bold">📢 Mantente informado con NoticiasMX</p>
          <button className="bg-white text-red-500 text-xs font-black px-4 py-1 rounded-full hover:scale-105 transition-transform">
            Suscribirse gratis
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo y descripción */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-black text-red-500 mb-3">📰 NoticiasMX</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Tu fuente de noticias más confiable. Información actualizada las 24 horas del día.
          </p>
          <div className="flex gap-3">
            {['🐦', '📘', '📸', '▶️'].map((emoji, i) => (
              <button
                key={i}
                className="w-9 h-9 bg-gray-800 hover:bg-red-500 rounded-full flex items-center justify-center text-sm transition-all duration-300 hover:scale-110"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Categorías */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-wider text-gray-400 mb-4">Categorías</h3>
          <ul className="space-y-2">
            {["Tecnología", "Deportes", "Política", "Ciencia", "Economía", "Cultura"].map((cat) => (
              <li key={cat} className="text-sm text-gray-400 hover:text-red-400 cursor-pointer transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-wider text-gray-400 mb-4">Enlaces</h3>
          <ul className="space-y-2">
            {["Acerca de", "Contacto", "Política de privacidad", "Términos de uso", "Publicidad", "RSS"].map((link) => (
              <li key={link} className="text-sm text-gray-400 hover:text-red-400 cursor-pointer transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-wider text-gray-400 mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-3">Recibe las noticias más importantes cada mañana.</p>
          <input
            type="email"
            placeholder="tu@email.com"
            className="w-full bg-gray-800 text-white text-sm px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-red-500 mb-2"
          />
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition-all duration-300 hover:scale-105">
            Suscribirme →
          </button>
        </div>

      </div>

      {/* Barra inferior */}
      <div className="border-t border-gray-800 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">© 2026 NoticiasMX — Todos los derechos reservados</p>
          <p className="text-xs text-gray-500">Hecho con ❤️ en México 🇲🇽</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer