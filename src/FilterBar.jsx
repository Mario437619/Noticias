function FilterBar({ categoriaActiva, onCategoriaChange }) {
  const categorias = ["Todas", "Ciencia", "Deportes", "Tecnología", "Política", "Economía", "Cultura"]

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          onClick={() => onCategoriaChange(categoria)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95
            ${categoriaActiva === categoria
              ? 'bg-red-500 text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500 shadow-sm'
            }`}
        >
          {categoria}
        </button>
      ))}
    </div>
  )
}

export default FilterBar