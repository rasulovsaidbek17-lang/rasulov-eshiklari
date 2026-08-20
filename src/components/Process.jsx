import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const steps = [
  ['01', 'Konsultatsiya', 'Ehtiyojingiz, uslubingiz va makon imkoniyatlarini birgalikda aniqlaymiz.'],
  ['02', 'O‘lchov', 'Mutaxassisimiz joyiga chiqib, har bir parametrni aniqlik bilan o‘lchaydi.'],
  ['03', 'Dizayn', 'Material, rang va funksionallikni makoningizga mos yechimga aylantiramiz.'],
  ['04', 'Ishlab chiqarish', 'Loyiha o‘z ustaxonamizda sifat nazorati ostida tayyorlanadi.'],
  ['05', 'O‘rnatish', 'Yakuniy montajni toza, aniq va belgilangan muddatda amalga oshiramiz.'],
]

export default function Process() {
  const ref = useReveal()
  const [active, setActive] = useState(0)
  const [number, title, text] = steps[active]
  return (
    <section ref={ref} className="process-stage overflow-hidden bg-charcoal-800 text-ivory">
      <div className="container-px py-20 md:py-28">
        <div data-reveal="left" className="max-w-2xl">
          <p className="tick-rule text-bronze-300 text-xs font-semibold tracking-widest2 uppercase mb-4">Individual yondashuv</p>
          <h2 className="font-display text-3xl font-extrabold tracking-[-.035em] md:text-5xl">LOYIHA QANDAY YARATILADI?</h2>
        </div>
        <div data-reveal="scale" className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div className="flex overflow-x-auto border-y border-white/10 process-rail">
            {steps.map(([stepNumber, stepTitle], index) => (
              <button key={stepNumber} type="button" onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={`process-step min-w-[10.5rem] flex-1 border-r border-white/10 px-5 py-6 text-left transition-colors duration-300 ${active === index ? 'bg-bronze-500 text-ivory' : 'hover:bg-white/5 text-ivory/60'}`}>
                <span className="block text-xs tracking-[.22em]">{stepNumber}</span>
                <span className="mt-8 block font-display text-sm font-bold tracking-wide">{stepTitle}</span>
              </button>
            ))}
          </div>
          <div className="relative overflow-hidden border border-bronze-400/35 bg-white/[.035] p-7 md:p-9">
            <span className="absolute -right-2 -top-8 font-display text-9xl font-extrabold text-bronze-400/10">{number}</span>
            <p className="relative text-xs font-semibold tracking-[.24em] text-bronze-300">BOSQICH {number}</p>
            <h3 className="relative mt-3 font-display text-3xl font-extrabold">{title}</h3>
            <p className="relative mt-4 max-w-md leading-relaxed text-ivory/65">{text}</p>
            <span className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-bronze-300">Keyingi qadam <ArrowUpRight size={16} /></span>
          </div>
        </div>
      </div>
    </section>
  )
}
