import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StickyActionBar from './components/StickyActionBar'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import ProductDetail from './pages/ProductDetail'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 pb-16 lg:pb-0">
        {/* Keying by pathname remounts the page subtree on navigation, which
            retriggers the fade-up entrance below — a restrained page-transition
            cue rather than a full animation library. */}
        <div key={location.pathname} className="animate-fadeUp motion-reduce:animate-none" style={{ animationDuration: '0.45s' }}>
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
      <Footer />
      <StickyActionBar />
    </div>
  )
}
