import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import { useLanguage } from '../context/LanguageContext'

const stats = [
  { end: 34, suffix: '+', label: 'Yillik tajriba' },
  { end: 500000, suffix: '+', label: 'Buyurtma' },
  { end: 100, suffix: '%', label: 'Sifat kafolati' },
]

export default function About() {
  const ref = useReveal()
  const { t } = useLanguage()
  const stats = [
    { end: 34, suffix: '+', label: t.about.experience },
    { end: 500000, suffix: '+', label: t.about.orders },
    { end: 100, suffix: '%', label: t.about.quality },
  ]
  return (
    <section ref={ref} className="bg-white">
      <div className="container-px py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div data-reveal="scale" className="relative order-2 lg:order-1">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden">
            <img src="/images/about.jpg" alt="Rasulov GI ustaxonasi" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-charcoal rounded-2xl px-6 py-5 md:px-8 md:py-6 shadow-xl">
            <div className="flex gap-6 md:gap-8">
              {stats.map((s) => (
                <StatItem key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>

        <div data-reveal="right" className="order-1 lg:order-2">
          <p className="tick-rule text-bronze-500 text-xs font-semibold tracking-widest2 uppercase mb-4">{t.about.label}</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal leading-tight">
            {t.about.title}
          </h2>
          <p className="mt-5 text-charcoal-400 leading-relaxed">
            {t.about.text}
          </p>
        </div>
      </div>
    </section>
  )
}

function StatItem({ end, suffix, label }) {
  const { ref, display } = useCountUp(end, { suffix })
  return (
    <div ref={ref} className="text-center">
      <p className="font-display font-extrabold text-bronze-300 text-xl md:text-2xl tabular-nums">{display}</p>
      <p className="text-ivory/70 text-[11px] md:text-xs mt-1 whitespace-nowrap">{label}</p>
    </div>
  )
}
