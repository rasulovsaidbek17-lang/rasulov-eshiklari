import { Link } from 'react-router-dom'
import { ArrowDownRight, ArrowRight, Phone, Sparkles } from 'lucide-react'
import { site } from '../data/site'
import { useCountUp } from '../hooks/useCountUp'

export default function Hero() {
  return (
    <section className="hero-stage relative min-h-[92vh] md:min-h-[100vh] flex items-end md:items-center overflow-hidden bg-charcoal">
      <img
        src="/images/hero.jpg"
        alt="Zamonaviy premium interyer: qora eshik va yong'oq mebel"
        className="absolute inset-0 h-full w-full object-cover animate-heroZoom motion-reduce:animate-none"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/[.94] via-charcoal/45 to-transparent" />
      <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="absolute right-5 top-28 hidden md:flex items-center gap-3 text-[10px] font-semibold tracking-[0.32em] text-ivory/50 [writing-mode:vertical-rl]">
        RASULOV GI / EST. 2016
        <span className="h-12 w-px bg-bronze-400/70" />
      </div>

      <div className="relative container-px w-full pb-16 pt-40 md:pb-0 md:pt-0">
        <div className="max-w-2xl">
          <p
            className="tick-rule text-bronze-300 text-xs md:text-sm font-semibold tracking-widest2 uppercase mb-6 opacity-0 animate-fadeUp motion-reduce:opacity-100"
            style={{ animationDelay: '150ms' }}
          >
            Toshkentdagi premium eshik &amp; mebel 
          </p>
          <h1 className="font-display font-extrabold text-ivory text-[2.65rem] leading-[1.03] sm:text-5xl md:text-7xl md:leading-[.98] tracking-[-0.045em]">
            <span
              className="block opacity-0 animate-fadeUp motion-reduce:opacity-100"
              style={{ animationDelay: '260ms' }}
            >
              MAKONINGIZGA
            </span>
            <span
              className="block opacity-0 animate-fadeUp motion-reduce:opacity-100"
              style={{ animationDelay: '360ms' }}
            >
              O‘ZIGA XOS
            </span>
            <span
              className="block opacity-0 animate-fadeUp motion-reduce:opacity-100"
              style={{ animationDelay: '460ms' }}
            >
              XARAKTER BERAMIZ
            </span>
          </h1>
          <p
            className="mt-7 text-ivory/75 text-base md:text-lg max-w-lg leading-relaxed opacity-0 animate-fadeUp motion-reduce:opacity-100"
            style={{ animationDelay: '600ms' }}
          >
            {site.subSlogan}. Har bir loyiha — o‘lchamdan tortib o‘rnatishgacha — bitta ustaxonada.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 opacity-0 animate-fadeUp motion-reduce:opacity-100"
            style={{ animationDelay: '740ms' }}
          >
            <Link
              to="/mahsulotlar"
              className="group inline-flex items-center gap-2 rounded-full bg-bronze-500 hover:bg-bronze-400 text-ivory font-semibold text-sm px-7 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(168,121,62,0.55)]"
            >
              Katalogni ko‘rish
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-ivory/35 hover:border-ivory/70 text-ivory font-semibold text-sm px-7 py-4 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Qo‘ng‘iroq qilish
            </a>
          </div>
          <div className="mt-11 flex flex-wrap gap-x-8 gap-y-4 border-t border-ivory/15 pt-5 opacity-0 animate-fadeUp motion-reduce:opacity-100" style={{ animationDelay: '880ms' }}>
            <HeroMetric end={34} suffix="+" label="yillik tajriba" />
            <HeroMetric end={500000} suffix="+" label="buyurtma" />
            <HeroMetric end={100} suffix="%" label="individual yondashuv" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 right-5 hidden md:flex lg:right-10 items-center gap-4 text-ivory/65">
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase">Pastga kashf eting</span>
        <span className="hero-scroll flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30"><ArrowDownRight size={16} /></span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-ivory/20"><span className="block h-px w-[38%] bg-bronze-400 animate-heroLine origin-left motion-reduce:animate-none" /></div>
    </section>
  )
}

function HeroMetric({ end, suffix, label }) {
  const { ref, display } = useCountUp(end, { duration: 1800, suffix })

  return (
    <div ref={ref} className="flex items-center gap-2.5">
      <Sparkles size={13} className="text-bronze-300" strokeWidth={1.5} />
      <p className="text-xs text-ivory/65"><strong className="font-display text-base text-ivory mr-1.5 tabular-nums">{display}</strong>{label}</p>
    </div>
  )
}
