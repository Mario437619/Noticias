import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function NotFoundPage({ modoOscuro }) {
  const navigate = useNavigate()
  const [contador, setContador] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setContador((prev) => {
        if (prev === 1) {
          clearInterval(timer)
          navigate('/')
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center text-center px-6 ${modoOscuro ? 'bg-gray-950' : 'bg-gray-100'}`}>

      {/* Número 404 animado */}
      <div className="relative mb-8">
        <h1 className="text-9xl font-black text-red-500 opacity-10 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">📰</span>
        </div>
      </div>

      {/* Mensaje */}
      <h2 className={`text-3xl font-black mb-3 ${modoOscuro ? 'text-white' : 'text-gray-800'}`}
        style={{ animation: 'fadeUp 0.6s ease-out both' }}
      >
        ¡Página no encontrada!
      </h2>

      <p className={`text-base mb-8 max-w-md ${modoOscuro ? 'text-gray-400' : 'text-gray-500'}`}
        style={{ animation: 'fadeUp 0.6s ease-out 0.1s both' }}
      >
        La página que buscas no existe o fue eliminada. Regresarás al inicio en <span className="text-red-500 font-black">{contador}</span> segundos.
      </p>

      {/* Botones */}
      <div className="flex gap-3"
        style={{ animation: 'fadeUp 0.6s ease-out 0.2s both' }}
      >
        <button
          onClick={() => navigate('/')}
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
        >
          🏠 Ir al inicio
        </button>
        <button
          onClick={() => navigate(-1)}
          className={`font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 border ${modoOscuro ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
        >
          ← Regresar
        </button>
      </div>

    </div>
  )
}

export default NotFoundPage