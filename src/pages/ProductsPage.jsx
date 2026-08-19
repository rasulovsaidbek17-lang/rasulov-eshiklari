import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
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
  const [visible, setVisible] = useState(activeFilter)
  const ref = useReveal([visible])

  useEffect(() => setVisible(activeFilter), [activeFilter])

  const filtered = useMemo(
    () => (visible === 'barchasi' ? products : products.filter((p) => p.category === visible)),
    [visible]
  )

  const handleFilter = (key) => {
    setVisible(key)
    if (key === 'barchasi') setParams({})
    else setParams({ kategoriya: key })
  }

  return (
    <main className="pt-28 md:pt-32 pb-8 bg-ivory min-h-screen">
      <div className="container-px">
        <header className="max-w-2xl mb-10">
          <p className="tick-rule text-bronze-500 text-xs font-semibold tracking-widest2 uppercase mb-4">Katalog</p>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal">OMMABOP MAHSULOTLAR</h1>
          <p className="mt-3 text-charcoal-400">Sizga mos eshik va mebel modellarini tanlang.</p>
        </header>

        <div className="flex flex-wrap gap-2.5 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => handleFilter(f.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                visible === f.key
                  ? 'bg-charcoal text-ivory'
                  : 'bg-white text-charcoal-400 border border-charcoal/10 hover:border-charcoal/30'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 pb-16">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-charcoal-400 py-16">Ushbu kategoriyada mahsulot topilmadi.</p>
          )}
        </div>
      </div>
    </main>
  )
}
