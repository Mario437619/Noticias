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
    <section className="relative w-full h-[500px] overflow-hidden">

      {/* Imagen de fondo con parallax */}
      <img
        ref={imgRef}
        src="https://picsum.photos/seed/hero/1200/500"
        alt="Noticia destacada"
        className="w-full h-full object-cover hero-img"
      />

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Contenido */}
      <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl"
        style={{ animation: 'fadeUp 0.8s ease-out forwards' }}
      >
        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
          style={{ animation: 'pulse-red 2s infinite' }}
        >
          🔥 Destacado
        </span>

        <h1 className="text-white text-4xl font-black mt-3 leading-tight drop-shadow-lg"
          style={{ animation: 'fadeUp 0.8s ease-out 0.2s both' }}
        >
          México lidera innovación tecnológica en América Latina
        </h1>

        <p className="text-gray-300 text-sm mt-2 max-w-xl"
          style={{ animation: 'fadeUp 0.8s ease-out 0.4s both' }}
        >
          Expertos internacionales reconocen el avance del ecosistema tech mexicano como uno de los más dinámicos de la región.
        </p>

        <button
          className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          style={{ animation: 'fadeUp 0.8s ease-out 0.6s both' }}
        >
          Leer más →
        </button>
      </div>

    </section>
  )
}

export default HeroSection