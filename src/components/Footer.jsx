function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      
      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-black text-red-500 mb-3">📰 NoticiasMX</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Tu fuente de noticias más confiable. Información actualizada las 24 horas del día, los 7 días de la semana.
          </p>
        </div>

        {/* Categorías */}
        <div>
          <h3 className="text-lg font-bold mb-3 border-b border-gray-700 pb-2">Categorías</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {["Tecnología", "Deportes", "Política", "Ciencia", "Economía", "Cultura"].map((cat) => (
              <li key={cat} className="hover:text-red-400 cursor-pointer transition-colors">
                → {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-bold mb-3 border-b border-gray-700 pb-2">Síguenos</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              { red: "Twitter / X", emoji: "🐦" },
              { red: "Facebook", emoji: "📘" },
              { red: "Instagram", emoji: "📸" },
              { red: "YouTube", emoji: "▶️" },
            ].map((item) => (
              <li key={item.red} className="hover:text-red-400 cursor-pointer transition-colors">
                {item.emoji} {item.red}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Barra inferior */}
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © 2026 NoticiasMX — Todos los derechos reservados
      </div>

    </footer>
  )
}

export default Footer