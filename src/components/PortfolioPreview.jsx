import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { portfolioProjects } from '../data/products'
import { useReveal } from '../hooks/useReveal'

export default function PortfolioPreview() {
  const ref = useReveal()
  return (
    <section ref={ref} className="bg-ivory">
      <div className="container-px py-16 md:py-24">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="tick-rule text-bronze-500 text-xs font-semibold tracking-widest2 uppercase mb-4">Portfolio</p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal">BIZNING ISHLARIMIZ</h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 text-charcoal font-semibold text-sm border-b border-charcoal/30 pb-0.5 hover:border-charcoal"
          >
            Barcha loyihalar <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {portfolioProjects.slice(0, 6).map((p, i) => (
            <Link
              to="/portfolio"
              key={p.id}
              data-reveal
              style={{ animationDelay: `${i * 60}ms` }}
              className={`group relative overflow-hidden rounded-2xl block ${i === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-square'}`}
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors duration-400" />
              <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-ivory font-display font-bold text-sm">{p.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
