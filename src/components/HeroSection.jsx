function HeroSection() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">

      {/* Imagen de fondo */}
      <img
        src="https://picsum.photos/seed/hero/1200/500"
        alt="Noticia destacada"
        className="w-full h-full object-cover scale-105 animate-pulse"
        style={{ animation: 'zoomIn 8s ease-in-out infinite alternate' }}
      />

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Contenido */}
      <div
        className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl"
        style={{ animation: 'fadeUp 0.8s ease-out forwards' }}
      >
        {/* Badge categoría */}
        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          🔥 Destacado
        </span>

        {/* Título */}
        <h1 className="text-white text-4xl font-black mt-3 leading-tight drop-shadow-lg">
          México lidera innovación tecnológica en América Latina
        </h1>

        {/* Descripción */}
        <p className="text-gray-300 text-sm mt-2 max-w-xl">
          Expertos internacionales reconocen el avance del ecosistema tech mexicano como uno de los más dinámicos de la región.
        </p>

        {/* Botón */}
        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95">
          Leer más →
        </button>
      </div>

    </section>
  )
}

export default HeroSection