import Hero from '../components/Hero'
import Categories from '../components/Categories'
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
      <Categories />
      <Contact />
    </>
  )
}
