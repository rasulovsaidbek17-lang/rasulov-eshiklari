import { ShieldCheck, Sparkles, Truck, BadgeCheck } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const features = [
  {
    icon: ShieldCheck,
    title: 'SIFAT KAFOLATI',
    text: 'Sifatli materiallar va uzoq muddatli xizmat',
  },
  {
    icon: Sparkles,
    title: 'ZAMONAVIY DIZAYN',
    text: 'Trenddagi va zamonaviy modellar',
  },
  {
    icon: Truck,
    title: 'TEZ VA ISHONCHLI',
    text: 'O‘z vaqtida yetkazib berish va o‘rnatish',
  },
  {
    icon: BadgeCheck,
    title: 'KAFOLAT VA SERVIS',
    text: 'Mahsulotlarimizga rasmiy kafolat',
  },
]

export default function Features() {
  const ref = useReveal()
  return (
    <section ref={ref} className="relative bg-ivory border-b border-charcoal/5 overflow-hidden">
      <p className="absolute -right-3 top-1/2 -translate-y-1/2 font-display font-extrabold text-[18vw] leading-none text-charcoal/[.025] select-none" aria-hidden="true">RGI</p>
      <div className="container-px py-14 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-reveal
              style={{ animationDelay: `${i * 90}ms` }}
              className="premium-card group relative flex flex-col items-start gap-4 rounded-2xl border border-transparent p-3 -m-3 transition-all duration-500 hover:-translate-y-1 hover:border-bronze-100 hover:bg-white"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bronze-50 text-bronze-600 transition-all duration-500 group-hover:bg-bronze-500 group-hover:text-ivory group-hover:rotate-6">
                <f.icon size={22} strokeWidth={1.6} />
              </span>
              <h3 className="font-display font-bold text-sm tracking-wide text-charcoal">{f.title}</h3>
              <p className="text-charcoal-400 text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
