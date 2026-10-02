import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PackageOpen } from 'lucide-react'
import { catalogGroups, products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import { useLanguage } from '../context/LanguageContext'
import { getLocalizedCategoryName } from '../data/productTranslations'
import { loadPopularity, sortByPopularity } from '../data/productPopularity'

export default function ProductsPage() {
  const { language, t } = useLanguage()
  const [views, setViews] = useState({})
  const catalogFilters = [
    { key: 'barchasi', label: t.catalog.label },
    { key: 'eshiklar', label: t.catalog.doors },
  ]
  useSEO({
    title: 'Mahsulotlar — Eshiklar katalogi | Rasulov GI',
    description: 'Ichki va kirish eshiklari katalogi. Narxlar va rang variantlari bilan.',
  })

  const [params, setParams] = useSearchParams()
  const activeFilter = params.get('kategoriya') || 'barchasi'
  const activeSubcategory = params.get('tur') || ''
  const activeGroup = catalogGroups.find((group) => group.id === activeFilter)
  const ref = useReveal([activeFilter, activeSubcategory])

  useEffect(() => {
    loadPopularity().then(setViews)
    const onPopularityUpdate = () => setViews((current) => ({ ...current }))
    window.addEventListener('rgi-popularity-update', onPopularityUpdate)
    return () => window.removeEventListener('rgi-popularity-update', onPopularityUpdate)
  }, [])

  const filtered = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory = activeFilter === 'barchasi'
        || product.category === activeFilter
      const matchesSubcategory = !activeSubcategory || product.subcategory === activeSubcategory
      return matchesCategory && matchesSubcategory
    })

    return sortByPopularity(result, views)
  }, [activeFilter, activeSubcategory, views])

  const categoryCounts = useMemo(
    () => catalogFilters.reduce((counts, filter) => {
      counts[filter.key] = filter.key === 'barchasi'
        ? products.length
        : products.filter((product) => product.category === filter.key).length
      return counts
    }, {}),
    []
  )

  const updateCategory = (category) => {
    if (category === 'barchasi') setParams({})
    else setParams({ kategoriya: category })
  }

  const updateSubcategory = (subcategory) => {
    if (!activeGroup || subcategory === 'barchasi') {
      setParams({ kategoriya: activeFilter })
      return
    }
    setParams({ kategoriya: activeFilter, tur: subcategory })
  }

  return (
<<<<<<< HEAD
    <main ref={ref} className="relative min-h-screen overflow-hidden bg-[#f7f4f1] pb-16 pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#f5efe7] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <header data-reveal="left" className="flex flex-col gap-4 pb-6 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-light uppercase tracking-[0.22em] text-stone-900 md:text-4xl">Katalog</h1>
          </div>
        </header>

        <section data-reveal="right" className="border-b border-stone-200 pb-4" aria-label={t.footer.categories}>
          <div className="flex flex-wrap items-center gap-3" role="group" aria-label={t.footer.categories}>
=======
    <main ref={ref} className="relative overflow-hidden pt-28 md:pt-36 pb-16 bg-ivory min-h-screen">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sand-light to-transparent pointer-events-none" />
      <span className="pointer-events-none absolute right-[-.06em] top-20 font-display text-[21vw] font-extrabold leading-none text-charcoal/[.025]" aria-hidden="true">RGI</span>
      <div className="container-px relative">
        <header data-reveal="left" className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="tick-rule text-bronze-500 text-xs font-semibold tracking-widest2 uppercase mb-4">Rasulov GI / Katalog</p>
            {/* <h1 className="font-display font-extrabold text-4xl md:text-6xl text-charcoal leading-[.98] tracking-tight"></h1>
            <p className="mt-5 max-w-xl text-charcoal-400 leading-relaxed"></p> */}
          </div>
          <div className="shrink-0 border-l-2 border-bronze-400 pl-4">
            <p className="font-display text-3xl font-extrabold text-charcoal">{products.length.toString().padStart(2, '0')}</p>
            <p className="mt-1 text-[10px] font-semibold tracking-[.2em] text-charcoal-400 uppercase">{t.catalog.models}</p>
          </div>
        </header>

        <section data-reveal="right" className="mt-12 border-y border-charcoal/10 py-5" aria-label={t.footer.categories}>
          <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label={t.footer.categories}>
>>>>>>> 836fef6845447fddc5d10ac70f15bf59432efc97
            {catalogFilters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => updateCategory(filter.key)}
<<<<<<< HEAD
                className={`relative inline-flex items-center gap-2 pb-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                  activeFilter === filter.key ? 'text-stone-900' : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                <span>{filter.label}</span>
                <span className={`text-[10px] ${activeFilter === filter.key ? 'text-stone-700' : 'text-stone-400'}`}>{categoryCounts[filter.key]}</span>
                {activeFilter === filter.key && <span className="absolute -bottom-[1px] left-0 h-px w-full bg-stone-900" />}
=======
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                  activeFilter === filter.key ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/10 bg-ivory text-charcoal-400 hover:border-charcoal/30 hover:text-charcoal'
                }`}
              >
                {filter.label}<span className="ml-1.5 opacity-55">{categoryCounts[filter.key]}</span>
>>>>>>> 836fef6845447fddc5d10ac70f15bf59432efc97
              </button>
            ))}
          </div>
        </section>

        {activeGroup && (
<<<<<<< HEAD
          <section data-reveal="left" className="mt-5 pb-5" aria-label={`${getLocalizedCategoryName(activeGroup.name, activeGroup.id, language)} ${t.catalog.types}`}>
            <div className="flex flex-wrap items-center gap-2">
              <p className="mr-2 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">
                {getLocalizedCategoryName(activeGroup.name, activeGroup.id, language)}
              </p>
              <button
                type="button"
                onClick={() => updateSubcategory('barchasi')}
                className={`rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] transition-all ${
                  !activeSubcategory ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-600 hover:border-stone-300 hover:text-stone-900'
=======
          <section data-reveal="left" className="mt-6 border-b border-charcoal/10 pb-6" aria-label={`${getLocalizedCategoryName(activeGroup.name, activeGroup.id, language)} ${t.catalog.types}`}>
            <p className="mb-3 text-xs font-semibold tracking-[.18em] text-charcoal-400 uppercase">{getLocalizedCategoryName(activeGroup.name, activeGroup.id, language)} {t.catalog.types}</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label={`${getLocalizedCategoryName(activeGroup.name, activeGroup.id, language)} ${t.catalog.types}`}>
              <button
                type="button"
                onClick={() => updateSubcategory('barchasi')}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                  !activeSubcategory ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/10 bg-ivory text-charcoal-400 hover:border-charcoal/30 hover:text-charcoal'
>>>>>>> 836fef6845447fddc5d10ac70f15bf59432efc97
                }`}
              >
                {t.catalog.label}
              </button>
              {activeGroup.subcategories.map((subcategory) => (
                <button
                  key={subcategory.key}
                  type="button"
                  onClick={() => updateSubcategory(subcategory.key)}
<<<<<<< HEAD
                  className={`rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] transition-all ${
                    activeSubcategory === subcategory.key ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-600 hover:border-stone-300 hover:text-stone-900'
=======
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                    activeSubcategory === subcategory.key ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/10 bg-ivory text-charcoal-400 hover:border-charcoal/30 hover:text-charcoal'
>>>>>>> 836fef6845447fddc5d10ac70f15bf59432efc97
                  }`}
                >
                  {getLocalizedCategoryName(subcategory.label, subcategory.key, language)}
                </button>
              ))}
            </div>
          </section>
        )}

<<<<<<< HEAD
        <div className="relative mt-6 grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
=======
        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold tracking-[.18em] text-charcoal-400 uppercase">{filtered.length} {t.catalog.products}</p>
        </div>

        <div className="relative mt-5 grid gap-4 pb-16 sm:grid-cols-2 lg:gap-5 lg:grid-cols-3">
>>>>>>> 836fef6845447fddc5d10ac70f15bf59432efc97
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} topRank={i < 3 ? i + 1 : 0} />
          ))}
          {filtered.length === 0 && (
<<<<<<< HEAD
            <div className="col-span-full flex flex-col items-center justify-center rounded-[24px] border border-dashed border-stone-300 bg-white px-6 py-20 text-center shadow-[0_18px_45px_-30px_rgba(17,17,17,0.35)]">
              <PackageOpen size={34} strokeWidth={1.3} className="text-stone-700" />
              <h2 className="mt-5 font-display text-xl font-semibold text-stone-900">{t.catalog.empty}</h2>
              <p className="mt-2 max-w-sm text-sm text-stone-500">{t.catalog.emptyText}</p>
              <button type="button" onClick={() => setParams({})} className="mt-6 rounded-full border border-stone-900 bg-stone-900 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-stone-800">{t.catalog.viewAll}</button>
=======
            <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-charcoal/15 bg-white px-6 py-20 text-center">
              <PackageOpen size={34} strokeWidth={1.3} className="text-bronze-500" />
              <h2 className="mt-5 font-display text-xl font-bold text-charcoal">{t.catalog.empty}</h2>
              <p className="mt-2 max-w-sm text-sm text-charcoal-400">{t.catalog.emptyText}</p>
              <button type="button" onClick={() => setParams({})} className="mt-6 rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-charcoal-600">{t.catalog.viewAll}</button>
>>>>>>> 836fef6845447fddc5d10ac70f15bf59432efc97
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
