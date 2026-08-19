import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] md:min-h-[100vh] flex items-end md:items-center overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Zamonaviy premium interyer: qora eshik va yong'oq mebel"
        className="absolute inset-0 h-full w-full object-cover animate-heroZoom motion-reduce:animate-none"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/30 to-transparent" />

      <div className="relative container-px w-full pb-16 pt-40 md:pb-0 md:pt-0">
        <div className="max-w-xl">
          <p
            className="tick-rule text-bronze-300 text-xs md:text-sm font-semibold tracking-widest2 uppercase mb-6 opacity-0 animate-fadeUp motion-reduce:opacity-100"
            style={{ animationDelay: '150ms' }}
          >
            Toshkentdagi premium eshik &amp; mebel ustaxonasi
          </p>
          <h1 className="font-display font-extrabold text-ivory text-[2.5rem] leading-[1.08] sm:text-5xl md:text-6xl md:leading-[1.06]">
            <span
              className="block opacity-0 animate-fadeUp motion-reduce:opacity-100"
              style={{ animationDelay: '260ms' }}
            >
              SIFATLI ESHIKLAR
            </span>
            <span
              className="block opacity-0 animate-fadeUp motion-reduce:opacity-100"
              style={{ animationDelay: '360ms' }}
            >
              VA ZAMONAVIY
            </span>
            <span
              className="block opacity-0 animate-fadeUp motion-reduce:opacity-100"
              style={{ animationDelay: '460ms' }}
            >
              MEBELLAR
            </span>
          </h1>
          <p
            className="mt-6 text-ivory/75 text-base md:text-lg max-w-md opacity-0 animate-fadeUp motion-reduce:opacity-100"
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
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/35 hover:border-ivory/70 text-ivory font-semibold text-sm px-7 py-4 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Buyurtma berish
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
