import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { categories } from '../data/products'
import { useReveal } from '../hooks/useReveal'

export default function Categories() {
  const ref = useReveal()
  return (
    <section ref={ref} className="bg-white">
      <div className="container-px py-16 md:py-24">
        <div data-reveal className="max-w-2xl mb-12">
          <p className="tick-rule text-bronze-500 text-xs font-semibold tracking-widest2 uppercase mb-4">Kolleksiya</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal">TANLANGAN KOLLEKSIYA</h2>
          <p className="mt-3 text-charcoal-400">Makoningiz uchun ishlab chiqilgan premium yechimlar.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((c, i) => (
            <Link
              to={`/mahsulotlar?kategoriya=${c.filterKey}`}
              key={c.id}
              data-reveal="scale" data-tilt
              style={{ animationDelay: `${i * 70}ms` }}
              className="group premium-card relative aspect-[4/5] overflow-hidden rounded-2xl block ring-1 ring-black/5"
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent transition-opacity duration-500 group-hover:from-charcoal/95" />
              <span className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-ivory text-charcoal opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"><ArrowRight size={16} /></span>
              <span className="absolute left-4 top-4 text-[10px] font-semibold tracking-[.22em] text-ivory/70">0{i + 1}</span>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <h3 className="font-display font-bold text-ivory text-sm md:text-base tracking-wide">{c.name}</h3>
                <span className="mt-1 inline-flex items-center gap-1.5 text-bronze-300 text-xs md:text-sm font-medium opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Ko‘rish <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
