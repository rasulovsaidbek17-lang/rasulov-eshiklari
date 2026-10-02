import { otherDoors } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { loadPopularity, sortByPopularity } from '../data/productPopularity'

export default function OtherDoorsPage() {
  const { t } = useLanguage()
  const [views, setViews] = useState({})
  const ref = useReveal([])
  useEffect(() => {
    loadPopularity().then(setViews)
    const onPopularityUpdate = () => setViews((current) => ({ ...current }))
    window.addEventListener('rgi-popularity-update', onPopularityUpdate)
    return () => window.removeEventListener('rgi-popularity-update', onPopularityUpdate)
  }, [])
  useSEO({
    title: 'Eshiklar olami',
    description: 'Eshiklar olami eshiklar kolleksiyasi.',
  })

  return (
    <main ref={ref} className="relative min-h-screen overflow-hidden bg-ivory pb-16 pt-28 md:pt-36">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sand-light to-transparent pointer-events-none" />
      <span className="pointer-events-none absolute right-[-.06em] top-20 font-display text-[13vw] font-extrabold leading-none text-charcoal/[.025]" aria-hidden="true">ESHIKLAR OLAMI</span>
      <div className="container-px relative">
        <header data-reveal="left" className="max-w-3xl">
          <p data-reveal="left" className="tick-rule mb-4 text-xs font-semibold tracking-widest2 text-bronze-500 uppercase">ESHIKLAR OLAMI / DOOR COLLECTION</p>
          <h1 className="font-display text-4xl font-extrabold leading-[.98] text-charcoal md:text-6xl">{t.otherDoors.title}</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-charcoal-400">{t.otherDoors.description}</p>
        </header>

        <div className="relative mt-12 grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {sortByPopularity(otherDoors, views).map((product, index) => <ProductCard key={product.id} product={product} index={index} topRank={index < 3 ? index + 1 : 0} />)}
        </div>
      </div>
    </main>
  )
}