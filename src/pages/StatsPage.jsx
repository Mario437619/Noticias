import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'
import { useNavigate } from 'react-router-dom'

const datos = [
  { categoria: 'Tecnología', noticias: 142, lectores: 12400 },
  { categoria: 'Deportes', noticias: 98, lectores: 9800 },
  { categoria: 'Política', noticias: 87, lectores: 7200 },
  { categoria: 'Ciencia', noticias: 65, lectores: 6500 },
  { categoria: 'Economía', noticias: 54, lectores: 5400 },
  { categoria: 'Cultura', noticias: 43, lectores: 4300 },
]

const COLORES = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7']

function StatsPage({ modoOscuro }) {
  const navigate = useNavigate()

  return (
    <div className={`min-h-screen ${modoOscuro ? 'bg-gray-950' : 'bg-gray-100'}`}>
      <main className="max-w-6xl mx-auto px-6 py-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8"
          style={{ animation: 'fadeUp 0.6s ease-out both' }}
        >
          <div>
            <h1 className={`text-3xl font-black ${modoOscuro ? 'text-white' : 'text-gray-800'}`}>
              📊 Estadísticas
            </h1>
            <p className={`text-sm mt-1 ${modoOscuro ? 'text-gray-400' : 'text-gray-500'}`}>
              Resumen de actividad de NoticiasMX
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="text-sm font-bold text-red-500 hover:text-red-700 transition-colors"
          >
            ← Regresar
          </button>
        </div>

        {/* Cards resumen */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Noticias totales', valor: '489', emoji: '📰' },
            { label: 'Lectores hoy', valor: '12.4k', emoji: '👥' },
            { label: 'Categorías', valor: '6', emoji: '📂' },
            { label: 'Fuentes', valor: '89', emoji: '🌐' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`rounded-2xl p-5 shadow-md ${modoOscuro ? 'bg-gray-800' : 'bg-white'}`}
              style={{ animation: `fadeUp 0.6s ease-out ${i * 0.1}s both` }}
            >
              <span className="text-3xl">{stat.emoji}</span>
              <p className={`text-2xl font-black mt-2 ${modoOscuro ? 'text-white' : 'text-gray-800'}`}>
                {stat.valor}
              </p>
              <p className={`text-xs ${modoOscuro ? 'text-gray-400' : 'text-gray-500'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Gráfica de barras */}
          <div
            className={`rounded-2xl p-6 shadow-md ${modoOscuro ? 'bg-gray-800' : 'bg-white'}`}
            style={{ animation: 'fadeUp 0.6s ease-out 0.3s both' }}
          >
            <h3 className={`text-lg font-black mb-4 ${modoOscuro ? 'text-white' : 'text-gray-800'}`}>
              Noticias por categoría
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={datos}>
                <CartesianGrid strokeDasharray="3 3" stroke={modoOscuro ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="categoria" tick={{ fontSize: 11, fill: modoOscuro ? '#9ca3af' : '#6b7280' }} />
                <YAxis tick={{ fontSize: 11, fill: modoOscuro ? '#9ca3af' : '#6b7280' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: modoOscuro ? '#1f2937' : 'white',
                    border: 'none',
                    borderRadius: '12px',
                    color: modoOscuro ? 'white' : 'black'
                  }}
                />
                <Bar dataKey="noticias" fill="#ef4444" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfica de pie */}
          <div
            className={`rounded-2xl p-6 shadow-md ${modoOscuro ? 'bg-gray-800' : 'bg-white'}`}
            style={{ animation: 'fadeUp 0.6s ease-out 0.4s both' }}
          >
            <h3 className={`text-lg font-black mb-4 ${modoOscuro ? 'text-white' : 'text-gray-800'}`}>
              Lectores por categoría
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={datos}
                  dataKey="lectores"
                  nameKey="categoria"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ categoria, percent }) => `${categoria} ${(percent * 100).toFixed(0)}%`}
                >
                  {datos.map((_, index) => (
                    <Cell key={index} fill={COLORES[index % COLORES.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: modoOscuro ? '#1f2937' : 'white',
                    border: 'none',
                    borderRadius: '12px',
                    color: modoOscuro ? 'white' : 'black'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </main>
    </div>
  )
}

export default StatsPage