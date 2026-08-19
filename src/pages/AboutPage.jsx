import About from '../components/About'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import { useSEO } from '../hooks/useSEO'

export default function AboutPage() {
  useSEO({
    title: 'Biz haqimizda — Rasulov GI',
    description: "10 yildan ortiq tajriba, 500 dan ortiq bajarilgan loyiha. Rasulov GI — Toshkentdagi ishonchli hamkoringiz.",
  })

  return (
    <main className="pt-20 md:pt-24 bg-white">
      <div className="container-px pt-12 pb-4">
        <p className="tick-rule text-bronze-500 text-xs font-semibold tracking-widest2 uppercase mb-4">Kompaniya</p>
        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal max-w-xl">
          BIZ HAQIMIZDA
        </h1>
      </div>
      <About />
      <Testimonials />
      <CTA />
    </main>
  )
}
