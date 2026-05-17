import { useEffect, useState } from 'react'

function Sidebar({ onCategoriaChange, modoOscuro }) {
  const tendencias = [
    { id: 1, categoria: "Tecnología", titulo: "Apple presenta su nuevo chip M4 Ultra", visitas: 12400 },
    { id: 2, categoria: "Deportes", titulo: "Liga MX: resultados de la jornada 17", visitas: 9800 },
    { id: 3, categoria: "Política", titulo: "Senado aprueba nueva ley de telecomunicaciones", visitas: 7200 },
    { id: 4, categoria: "Ciencia", titulo: "NASA revela imágenes del telescopio James Webb", visitas: 6500 },
    { id: 5, categoria: "Tecnología", titulo: "ChatGPT lanza nueva actualización con memoria", visitas: 5900 },
  ]

  const [contadores, setContadores] = useState(tendencias.map(() => 0))

  useEffect(() => {
    const duracion = 1500
    const pasos = 60
    const intervalo = duracion / pasos

    let paso = 0
    const timer = setInterval(() => {
      paso++
      const progreso = paso / pasos
      setContadores(tendencias.map((t) => Math.floor(t.visitas * progreso)))
      if (paso >= pasos) clearInterval(timer)
    }, intervalo)

    return () => clearInterval(timer)
  }, [])

  const formatear = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k'
    return num
  }

  return (
    <aside className="w-full lg:w-80 shrink-0">

      {/* Tendencias */}
      <div className={`rounded-xl shadow-md p-5 mb-6 ${modoOscuro ? 'bg-gray-800' : 'bg-white'}`}>
        <h3 className={`text-lg font-black mb-4 border-b-2 border-red-500 pb-2 ${modoOscuro ? 'text-white' : 'text-gray-800'}`}>
          🔥 Tendencias
        </h3>
        <ul className="space-y-4">
          {tendencias.map((item, index) => (
            <li
              key={item.id}
              onClick={() => onCategoriaChange && onCategoriaChange(item.categoria)}
              className="flex gap-3 items-start cursor-pointer group"
              style={{ animation: `slideIn 0.4s ease-out ${index * 0.1}s both` }}
            >
              <span className="text-2xl font-black text-red-100 group-hover:text-red-400 transition-colors">
                {item.id}
              </span>
              <div className="flex-1">
                <span className="text-xs text-red-500 font-bold">{item.categoria}</span>
                <p className={`text-sm font-semibold group-hover:text-red-500 transition-colors leading-tight ${modoOscuro ? 'text-gray-300' : 'text-gray-700'}`}>
                  {item.titulo}
                </p>
                <span className="text-xs text-gray-400 font-mono">
                  {formatear(contadores[index])} lecturas
                </span>
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