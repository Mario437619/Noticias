import ScrollToTop from './components/ScrollToTop'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import NotFoundPage from './pages/NotFoundPage'
import StatsPage from './pages/StatsPage'
import { fetchNoticias } from './services/newsService'

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas")
  const [noticias, setNoticias] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [modoOscuro, setModoOscuro] = useState(false)
  const [busqueda, setBusqueda] = useState("")

  useEffect(() => {
    setCargando(true)
    setError(null)

    fetchNoticias(categoriaActiva)
      .then((data) => {
        setNoticias(data)
        setCargando(false)
      })
      .catch(() => {
        setError('No se pudieron cargar las noticias.')
        setCargando(false)
      })
  }, [categoriaActiva])

  const noticiasFiltradas = noticias.filter((n) =>
    n.title.toLowerCase().includes(busqueda.toLowerCase()) ||
    n.description?.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <BrowserRouter>
      <div className={modoOscuro ? 'bg-gray-950 min-h-screen' : 'bg-gray-100 min-h-screen'}>
        <NavBar
          onCategoriaChange={setCategoriaActiva}
          modoOscuro={modoOscuro}
          toggleModo={() => setModoOscuro(!modoOscuro)}
          busqueda={busqueda}
          setBusqueda={setBusqueda}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                noticias={noticiasFiltradas}
                cargando={cargando}
                error={error}
                categoriaActiva={categoriaActiva}
                setCategoriaActiva={setCategoriaActiva}
                modoOscuro={modoOscuro}
                busqueda={busqueda}
              />
            }
          />
          <Route path="/article" element={<ArticlePage modoOscuro={modoOscuro} />} />
          <Route path="*" element={<NotFoundPage modoOscuro={modoOscuro} />} />
          <Route path="/stats" element={<StatsPage modoOscuro={modoOscuro} />} />
        </Routes>

        <Footer modoOscuro={modoOscuro} />
      </div>
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App