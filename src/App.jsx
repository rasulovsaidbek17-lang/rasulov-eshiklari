import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LuxuryMotion from './components/LuxuryMotion'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.key])

  useEffect(() => {
    if (location.hash !== '#aloqa') return undefined

    const frame = window.requestAnimationFrame(() => {
      document.getElementById('aloqa')?.scrollIntoView({ behavior: 'smooth' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [location.hash])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 pb-16 lg:pb-0">
        <div key={location.key} className="route-page-enter motion-reduce:animate-none">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/mahsulotlar" element={<ProductsPage />} />
            <Route path="/mahsulot/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <LuxuryMotion />
      <Footer />
    </div>
  )
}
