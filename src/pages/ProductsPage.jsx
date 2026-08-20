import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PackageOpen } from 'lucide-react'
import { products, filters } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'

export default function ProductsPage() {
  useSEO({
    title: 'Mahsulotlar — Eshiklar va mebel katalogi | Rasulov GI',
    description: 'Ichki va kirish eshiklari, oshxona, yotoqxona, mehmonxona mebellari va shkaflar katalogi. Narxlar va rang variantlari bilan.',
  })

  const [params, setParams] = useSearchParams()
  const activeFilter = params.get('kategoriya') || 'barchasi'
  const ref = useReveal([activeFilter])

  const filtered = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory = activeFilter === 'barchasi' || product.category === activeFilter
      return matchesCategory
    })

    return result
  }, [activeFilter])

  const categoryCounts = useMemo(
    () => filters.reduce((counts, filter) => {
      counts[filter.key] = filter.key === 'barchasi' ? products.length : products.filter((product) => product.category === filter.key).length
      return counts
    }, {}),
    []
  )

  const updateCategory = (category) => {
    if (category === 'barchasi') setParams({})
    else setParams({ kategoriya: category })
  }

  return (
    <main ref={ref} className="relative overflow-hidden pt-28 md:pt-36 pb-16 bg-ivory min-h-screen">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sand-light to-transparent pointer-events-none" />
      <span className="pointer-events-none absolute right-[-.06em] top-20 font-display text-[21vw] font-extrabold leading-none text-charcoal/[.025]" aria-hidden="true">RGI</span>
      <div className="container-px relative">
        <header data-reveal="left" className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="tick-rule text-bronze-500 text-xs font-semibold tracking-widest2 uppercase mb-4">Rasulov GI / Katalog</p>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-charcoal leading-[.98] tracking-tight">SIZNING MAKONINGIZ UCHUN</h1>
            <p className="mt-5 max-w-xl text-charcoal-400 leading-relaxed">Eshik va mebel kolleksiyalarini bir joyda ko‘ring. Har bir model o‘lcham, rang va material bo‘yicha moslashtiriladi.</p>
          </div>
          <div className="shrink-0 border-l-2 border-bronze-400 pl-4">
            <p className="font-display text-3xl font-extrabold text-charcoal">{products.length.toString().padStart(2, '0')}</p>
            <p className="mt-1 text-[10px] font-semibold tracking-[.2em] text-charcoal-400 uppercase">tayyor model</p>
          </div>
        </header>

        <section data-reveal="right" className="mt-12 border-y border-charcoal/10 py-5" aria-label="Mahsulot kategoriyalari">
          <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Kategoriyalar">
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => updateCategory(filter.key)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                  activeFilter === filter.key ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/10 bg-ivory text-charcoal-400 hover:border-charcoal/30 hover:text-charcoal'
                }`}
              >
                {filter.label}<span className="ml-1.5 opacity-55">{categoryCounts[filter.key]}</span>
              </button>
            ))}
          </div>
        </section>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold tracking-[.18em] text-charcoal-400 uppercase">{filtered.length} ta mahsulot</p>
        </div>

        <div className="relative mt-5 grid gap-5 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-charcoal/15 bg-white px-6 py-20 text-center">
              <PackageOpen size={34} strokeWidth={1.3} className="text-bronze-500" />
              <h2 className="mt-5 font-display text-xl font-bold text-charcoal">Mos mahsulot topilmadi</h2>
              <p className="mt-2 max-w-sm text-sm text-charcoal-400">Boshqa kategoriyani tanlab yana bir bor urinib ko‘ring.</p>
              <button type="button" onClick={() => setParams({})} className="mt-6 rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-charcoal-600">Barchasini ko‘rish</button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
