import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, Images, X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
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

const categoryLabels = Object.fromEntries(filters.map((filter) => [filter.key, filter.label]))

export default function PortfolioPage() {
  useSEO({
    title: 'Portfolio — Bajarilgan loyihalar | Rasulov GI',
    description: 'Toshkentda bajarilgan eshik va mebel loyihalarimiz galereyasi.',
  })

  const [params, setParams] = useSearchParams()
  const active = params.get('kategoriya') || 'barchasi'
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

  useEffect(() => {
    if (lightbox === null) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') next()
      if (event.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightbox, filtered.length])

  const setFilter = (key) => {
    if (key === 'barchasi') setParams({})
    else setParams({ kategoriya: key })
  }

  const counts = useMemo(
    () => filters.reduce((result, filter) => {
      result[filter.key] = filter.key === 'barchasi' ? portfolioProjects.length : portfolioProjects.filter((project) => project.category === filter.key).length
      return result
    }, {}),
    []
  )

  return (
    <main className="relative overflow-hidden pt-28 md:pt-36 pb-20 bg-ivory min-h-screen">
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-sand-light to-transparent pointer-events-none" />
      <div className="container-px relative">
        <header data-reveal="left" className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="tick-rule text-bronze-500 text-xs font-semibold tracking-widest2 uppercase mb-4">Rasulov GI / Portfolio</p>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-charcoal leading-[.98] tracking-tight">MAKONLARDA QOLGAN IZIMIZ</h1>
            <p className="mt-5 max-w-xl text-charcoal-400 leading-relaxed">Har bir loyiha mijozning hayoti, didi va makoniga moslab yaratiladi. Bajarilgan ishlarimizdan ilhom oling.</p>
          </div>
          <div className="flex gap-8 border-l-2 border-bronze-400 pl-5">
            <div><p className="font-display text-3xl font-extrabold text-charcoal">{portfolioProjects.length.toString().padStart(2, '0')}</p><p className="mt-1 text-[10px] font-semibold tracking-[.18em] text-charcoal-400 uppercase">loyiha</p></div>
            <div><p className="font-display text-3xl font-extrabold text-charcoal">100%</p><p className="mt-1 text-[10px] font-semibold tracking-[.18em] text-charcoal-400 uppercase">individual</p></div>
          </div>
        </header>

        <section data-reveal="right" className="mt-12 flex flex-col gap-5 border-y border-charcoal/10 py-5 md:flex-row md:items-center md:justify-between" aria-label="Portfolio filtrlari">
          <div className="flex gap-2 overflow-x-auto pb-1">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                active === f.key
                  ? 'border-charcoal bg-charcoal text-ivory'
                  : 'border-charcoal/10 bg-white text-charcoal-400 hover:border-charcoal/30 hover:text-charcoal'
              }`}
            >
              {f.label}<span className="ml-1.5 opacity-55">{counts[f.key]}</span>
            </button>
          ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-charcoal-400"><Images size={16} className="text-bronze-600" />{filtered.length} ta loyiha ko‘rsatilmoqda</div>
        </section>

        <div ref={ref} className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[190px] md:gap-6">
          {filtered.map((p, i) => (
            <button
              key={p.id}
              data-reveal
              style={{ animationDelay: `${(i % 6) * 60}ms` }}
              onClick={() => openAt(i)}
              className={`group relative min-h-[280px] overflow-hidden rounded-2xl bg-charcoal text-left md:min-h-0 ${i === 0 ? 'md:col-span-7 md:row-span-2' : i === 1 ? 'md:col-span-5 md:row-span-2' : i === 2 ? 'md:col-span-5' : i === 3 ? 'md:col-span-7' : 'md:col-span-4'}`}
            >
              <img src={p.image} alt={p.name} loading="lazy" onError={(event) => { event.currentTarget.src = '/images/hero.jpg' }} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
              <span className="absolute left-4 top-4 text-[10px] font-bold tracking-[.2em] text-ivory/70">0{i + 1} / {categoryLabels[p.category]}</span>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <div><p className="font-display font-bold text-ivory text-base md:text-lg">{p.name}</p><p className="mt-1 text-xs text-ivory/60">Loyihani ko‘rish</p></div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ivory/40 text-ivory transition-all group-hover:border-bronze-300 group-hover:bg-bronze-500"><ArrowUpRight size={17} /></span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && <div className="mt-8 rounded-2xl border border-dashed border-charcoal/15 bg-white py-16 text-center text-sm text-charcoal-400">Bu kategoriyada loyiha topilmadi.</div>}
      </div>

      {lightbox !== null && filtered[lightbox] && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 md:p-10" role="dialog" aria-modal="true" aria-label="Portfolio loyihasi">
          <button type="button" onClick={close} className="absolute right-5 top-5 p-2 text-ivory/80 hover:text-ivory" aria-label="Yopish">
            <X size={28} />
          </button>
          <button type="button" onClick={prev} className="absolute left-3 p-2 text-ivory/70 hover:text-ivory md:left-8" aria-label="Oldingi">
            <ChevronLeft size={32} />
          </button>
          <button type="button" onClick={next} className="absolute right-3 p-2 text-ivory/70 hover:text-ivory md:right-8" aria-label="Keyingi">
            <ChevronRight size={32} />
          </button>
          <figure className="max-w-3xl w-full">
            <img src={filtered[lightbox].image} alt={filtered[lightbox].name} className="max-h-[75vh] w-full rounded-xl object-contain" />
            <figcaption className="mt-4 text-center text-ivory"><span className="font-display font-semibold">{filtered[lightbox].name}</span><span className="mx-2 text-ivory/35">/</span><span className="text-sm text-ivory/60">{lightbox + 1} / {filtered.length}</span></figcaption>
          </figure>
        </div>
      )}
    </main>
  )
}
