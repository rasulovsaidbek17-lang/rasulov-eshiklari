import Hero from '../components/Hero'
import Features from '../components/Features'
import Categories from '../components/Categories'
import PortfolioPreview from '../components/PortfolioPreview'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import { useSEO } from '../hooks/useSEO'

export default function Home() {
  useSEO({
    title: 'Rasulov GI — Sifatli eshiklar va zamonaviy mebellar | Toshkent',
    description: "Toshkentda sifatli ichki va kirish eshiklari, oshxona, yotoqxona va mehmonxona mebellari. Zamonaviy dizayn va tez yetkazib berish.",
  })

  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <PortfolioPreview />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  )
}
