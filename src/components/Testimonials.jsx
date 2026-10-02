import { Star } from 'lucide-react'
import { testimonials } from '../data/products'
import { useReveal } from '../hooks/useReveal'

export default function Testimonials() {
  const ref = useReveal()
  return (
    <section ref={ref} className="bg-ivory">
      <div className="container-px py-16 md:py-24">
        <div data-reveal className="max-w-2xl mb-12">
          <p className="tick-rule text-bronze-500 text-xs font-semibold tracking-widest2 uppercase mb-4">Fikrlar</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal">MIJOZLAR FIKRI</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-reveal
              style={{ animationDelay: `${i * 90}ms` }}
              className="rounded-2xl bg-white border border-charcoal/8 p-6 md:p-7 flex flex-col gap-4"
            >
              <div className="flex gap-0.5 text-bronze-400">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-charcoal-600 text-sm leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bronze-50 text-bronze-600 font-display font-bold text-sm">
                  {t.name.charAt(0)}
                </span>
                <span className="font-semibold text-charcoal text-sm">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
