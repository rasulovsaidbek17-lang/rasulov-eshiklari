import { useMemo, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { portfolioProjects } from '../data/products'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'

const filters = [
  { key: 'barchasi', label: 'Barchasi' },
  { key: 'eshiklar', label: 'Eshiklar' },
  { key: 'oshxona', label: 'Oshxona' },
  { key: 'yotoqxona', label: 'Yotoqxona' },
  { key: 'mehmonxona', label: 'Mehmonxona' },
]

export default function PortfolioPage() {
  useSEO({
    title: 'Portfolio — Bajarilgan loyihalar | Rasulov GI',
    description: 'Toshkentda bajarilgan eshik va mebel loyihalarimiz galereyasi.',
  })

  const [active, setActive] = useState('barchasi')
  const [lightbox, setLightbox] = useState(null)
  const ref = useReveal([active])

  const filtered = useMemo(
    () => (active === 'barchasi' ? portfolioProjects : portfolioProjects.filter((p) => p.category === active)),
    [active]
  )

  const openAt = (idx) => setLightbox(idx)
  const close = () => setLightbox(null)
  const next = () => setLightbox((i) => (i + 1) % filtered.length)
  const prev = () => setLightbox((i) => (i - 1 + filtered.length) % filtered.length)

  return (
    <main className="pt-28 md:pt-32 pb-20 bg-ivory min-h-screen">
      <div className="container-px">
        <header className="max-w-2xl mb-10">
          <p className="tick-rule text-bronze-500 text-xs font-semibold tracking-widest2 uppercase mb-4">Portfolio</p>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal">BIZNING ISHLARIMIZ</h1>
          <p className="mt-3 text-charcoal-400">Toshkentda bajarilgan real loyihalarimiz.</p>
        </header>

        <div className="flex flex-wrap gap-2.5 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === f.key
                  ? 'bg-charcoal text-ivory'
                  : 'bg-white text-charcoal-400 border border-charcoal/10 hover:border-charcoal/30'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div ref={ref} className="columns-2 md:columns-3 gap-4 md:gap-6 [&>*]:mb-4 md:[&>*]:mb-6">
          {filtered.map((p, i) => (
            <button
              key={p.id}
              data-reveal
              style={{ animationDelay: `${(i % 6) * 60}ms` }}
              onClick={() => openAt(i)}
              className={`group relative block w-full overflow-hidden rounded-2xl break-inside-avoid ${i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square'}`}
            >
              <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/55 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-left opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-ivory font-display font-bold text-sm">{p.name}</p>
                <p className="text-bronze-300 text-xs mt-0.5">Ko‘rish</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && filtered[lightbox] && (
        <div className="fixed inset-0 z-[60] bg-charcoal/95 flex items-center justify-center p-4 md:p-10" role="dialog" aria-modal="true">
          <button onClick={close} className="absolute top-5 right-5 text-ivory/80 hover:text-ivory p-2" aria-label="Yopish">
            <X size={28} />
          </button>
          <button onClick={prev} className="absolute left-3 md:left-8 text-ivory/70 hover:text-ivory p-2" aria-label="Oldingi">
            <ChevronLeft size={32} />
          </button>
          <button onClick={next} className="absolute right-3 md:right-8 text-ivory/70 hover:text-ivory p-2" aria-label="Keyingi">
            <ChevronRight size={32} />
          </button>
          <figure className="max-w-3xl w-full">
            <img src={filtered[lightbox].image} alt={filtered[lightbox].name} className="w-full max-h-[75vh] object-contain rounded-xl" />
            <figcaption className="text-ivory text-center mt-4 font-display font-semibold">{filtered[lightbox].name}</figcaption>
          </figure>
        </div>
      )}
    </main>
  )
}
