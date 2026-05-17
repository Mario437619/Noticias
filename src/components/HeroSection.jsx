import { useEffect, useRef } from 'react'

function HeroSection() {
  const imgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const scroll = window.scrollY
        imgRef.current.style.transform = `scale(1.08) translateY(${scroll * 0.15}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative w-full h-[600px] overflow-hidden">

      {/* Imagen de fondo con parallax */}
      <img
        ref={imgRef}
        src="https://picsum.photos/seed/hero/1400/600"
        alt="Noticia destacada"
        className="w-full h-full object-cover"
      />

      {/* Overlay multicapa */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      {/* Badge LIVE parpadeante */}
      <div className="absolute top-6 left-8 flex items-center gap-2"
        style={{ animation: 'fadeIn 0.8s ease-out both' }}
      >
        <span className="flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <span className="text-white text-xs font-bold tracking-widest uppercase">En vivo</span>
      </div>

      {/* Contenido */}
      <div className="absolute bottom-0 left-0 right-0 p-10 max-w-3xl">

        <span
          className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
          style={{ animation: 'fadeUp 0.6s ease-out 0.1s both' }}
        >
          🔥 Destacado
        </span>

        <h1
          className="text-white text-5xl font-black mt-4 leading-tight drop-shadow-lg"
          style={{ animation: 'fadeUp 0.6s ease-out 0.2s both' }}
        >
          México lidera innovación tecnológica en América Latina
        </h1>

        <p
          className="text-gray-300 text-base mt-3 max-w-xl leading-relaxed"
          style={{ animation: 'fadeUp 0.6s ease-out 0.3s both' }}
        >
          Expertos internacionales reconocen el avance del ecosistema tech mexicano como uno de los más dinámicos de la región.
        </p>

        {/* Botones */}
        <div
          className="flex gap-3 mt-6"
          style={{ animation: 'fadeUp 0.6s ease-out 0.4s both' }}
        >
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
            Leer más →
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 border border-white/20">
            Ver todas
          </button>
        </div>

        {/* Stats */}
        <div
          className="flex gap-6 mt-8"
          style={{ animation: 'fadeUp 0.6s ease-out 0.5s both' }}
        >
          {[
            { label: 'Noticias hoy', valor: '248' },
            { label: 'Lectores activos', valor: '12.4k' },
            { label: 'Fuentes', valor: '89' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-white font-black text-xl">{stat.valor}</p>
              <p className="text-gray-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HeroSection