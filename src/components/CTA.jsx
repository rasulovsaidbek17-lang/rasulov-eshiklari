import { Phone, Send } from 'lucide-react'
import { site } from '../data/site'
import { useReveal } from '../hooks/useReveal'

export default function CTA() {
  const ref = useReveal()
  return (
    <section ref={ref} className="relative bg-charcoal bg-noise overflow-hidden">
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #A8793E, transparent 70%)' }}
      />
      <div className="container-px py-16 md:py-24 relative text-center max-w-2xl mx-auto">
        <div data-reveal>
          <h2 className="font-display font-extrabold text-ivory text-3xl md:text-4xl leading-tight">
            UYINGIZNI YANGILASHGA TAYYORMISIZ?
          </h2>
          <p className="mt-4 text-ivory/65">
            Mahsulotlarimiz haqida batafsil ma'lumot olish uchun biz bilan bog‘laning.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-bronze-500 hover:bg-bronze-400 text-ivory font-semibold text-sm px-7 py-4 transition-colors"
            >
              <Phone size={16} />
              Telefon qilish
            </a>
            <a
              href={site.telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 hover:border-ivory/60 text-ivory font-semibold text-sm px-7 py-4 transition-colors"
            >
              <Send size={16} />
              Telegram orqali yozish
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
