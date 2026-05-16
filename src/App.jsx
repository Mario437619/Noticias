import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import { fetchNoticias } from './services/newsService'

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas")
  const [noticias, setNoticias] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

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

  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                noticias={noticias}
                cargando={cargando}
                error={error}
                categoriaActiva={categoriaActiva}
                setCategoriaActiva={setCategoriaActiva}
              />
            }
          />
          <Route path="/article" element={<ArticlePage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App