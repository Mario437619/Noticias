function Sidebar() {
  const tendencias = [
    { id: 1, categoria: "Tecnología", titulo: "Apple presenta su nuevo chip M4 Ultra", visitas: "12.4k" },
    { id: 2, categoria: "Deportes", titulo: "Liga MX: resultados de la jornada 17", visitas: "9.8k" },
    { id: 3, categoria: "Política", titulo: "Senado aprueba nueva ley de telecomunicaciones", visitas: "7.2k" },
    { id: 4, categoria: "Ciencia", titulo: "NASA revela imágenes del telescopio James Webb", visitas: "6.5k" },
    { id: 5, categoria: "Tecnología", titulo: "ChatGPT lanza nueva actualización con memoria", visitas: "5.9k" },
  ]

  return (
    <aside className="w-full lg:w-80 shrink-0">

      {/* Tendencias */}
      <div className="bg-white rounded-xl shadow-md p-5 mb-6">
        <h3 className="text-lg font-black text-gray-800 mb-4 border-b-2 border-red-500 pb-2">
          🔥 Tendencias
        </h3>
        <ul className="space-y-4">
          {tendencias.map((item) => (
            <li
              key={item.id}
              className="flex gap-3 items-start cursor-pointer group"
              style={{ animation: `fadeUp 0.5s ease-out ${item.id * 0.1}s both` }}
            >
              <span className="text-2xl font-black text-red-100 group-hover:text-red-400 transition-colors">
                {item.id}
              </span>
              <div>
                <span className="text-xs text-red-500 font-bold">{item.categoria}</span>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-red-500 transition-colors leading-tight">
                  {item.titulo}
                </p>
                <span className="text-xs text-gray-400">{item.visitas} lecturas</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-900 rounded-xl shadow-md p-5 text-white">
        <h3 className="text-lg font-black mb-2">📩 Newsletter</h3>
        <p className="text-gray-400 text-sm mb-4">Recibe las noticias más importantes cada mañana.</p>
        <input
          type="email"
          placeholder="tu@email.com"
          className="w-full bg-gray-700 text-white text-sm px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-red-500 mb-3"
        />
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95">
          Suscribirme
        </button>
      </div>

    </aside>
  )
}

export default Sidebar