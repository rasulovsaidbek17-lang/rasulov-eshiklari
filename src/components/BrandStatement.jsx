import { useReveal } from '../hooks/useReveal'

export default function BrandStatement() {
  const ref = useReveal()
  return (
    <section ref={ref} className="relative overflow-hidden bg-charcoal text-ivory">
      <div className="statement-rule absolute left-0 top-0 h-px w-full" />
      <div className="container-px py-24 md:py-36">
        <p data-reveal="left" className="tick-rule text-bronze-300 text-xs font-semibold tracking-widest2 uppercase mb-7">Rasulov GI falsafasi</p>
        <h2 data-reveal="clip" className="max-w-5xl font-display text-4xl font-extrabold leading-[1.04] tracking-[-.045em] md:text-6xl lg:text-7xl">Har bir detal — makoningiz xarakterining bir qismi.</h2>
        <div data-reveal="right" className="mt-10 ml-auto max-w-xl border-l border-bronze-400/60 pl-6 text-ivory/65 leading-relaxed md:text-lg">Biz eshik va mebelni faqat buyum sifatida emas, kundalik hayotingizni shakllantiradigan makon elementi sifatida yaratamiz. Material, proporsiya va funksionallik — barchasi bitta yaxlit yechimda.</div>
      </div>
    </section>
  )
}
