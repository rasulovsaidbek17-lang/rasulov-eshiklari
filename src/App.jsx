import { useEffect } from 'react'
import { Navigate, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LuxuryMotion from './components/LuxuryMotion'
import ProductsPage from './pages/ProductsPage'
import OtherDoorsPage from './pages/OtherDoorsPage'
import ProductDetail from './pages/ProductDetail'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'
import { otherDoors } from './data/products'

export default function App() {
  const location = useLocation()
  const detailId = location.pathname.startsWith('/mahsulot/') ? location.pathname.split('/').pop() : ''
  const isOtherDoors = location.pathname === '/boshqa-eshiklar' || otherDoors.some((product) => product.id === detailId)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.key])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar isOtherDoors={isOtherDoors} />
      <div className="flex-1 pb-16 lg:pb-0">
        <div key={location.key} className="route-page-enter motion-reduce:animate-none">
          <Routes location={location}>
            <Route path="/" element={<Navigate to="/mahsulotlar" replace />} />
            <Route path="/boshqa-eshiklar" element={<OtherDoorsPage />} />
            <Route path="/mahsulotlar" element={<ProductsPage />} />
            <Route path="/mahsulot/:id" element={<ProductDetail />} />
            <Route path="/aloqa" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <LuxuryMotion brand={isOtherDoors ? 'TUBO' : 'RGI'} replayKey={isOtherDoors ? location.key : null} />
      <Footer isOtherDoors={isOtherDoors} />
    </div>
  )
}
