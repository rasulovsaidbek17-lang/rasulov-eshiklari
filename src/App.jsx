import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StickyActionBar from './components/StickyActionBar'
import ScrollExperience from './components/ScrollExperience'
import { LuxuryLoader } from './components/LuxuryMotion'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import ProductDetail from './pages/ProductDetail'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.key])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 pb-16 lg:pb-0">
        <div key={location.key} className="route-page-enter motion-reduce:animate-none">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/mahsulotlar" element={<ProductsPage />} />
            <Route path="/mahsulot/:id" element={<ProductDetail />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/biz-haqimizda" element={<AboutPage />} />
            <Route path="/aloqa" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <div key={location.key} className="route-transition" aria-hidden="true">
        <LuxuryLoader />
      </div>
      <Footer />
      <StickyActionBar />
      <ScrollExperience />
    </div>
  )
}
