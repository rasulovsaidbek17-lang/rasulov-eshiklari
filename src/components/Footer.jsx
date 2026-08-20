import { Link } from 'react-router-dom'
import { Send, Instagram, Phone } from 'lucide-react'
import { site } from '../data/site'
import { catalogGroups } from '../data/products'

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 border-t border-white/5">
      <div className="container-px py-14 md:py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="inline-flex mb-4">
            <img
              src="/images/logo.png"
              alt={`${site.brand} — ${site.brandTagline}`}
              className="h-[3.79rem] w-auto"
            />
          </Link>
          <p className="text-ivory/50 text-sm leading-relaxed max-w-xs">
            Sifatli eshiklar va zamonaviy mebellar — uyingiz uchun eng yaxshi tanlov.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a href={site.telegramHref} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-ivory/70 hover:text-bronze-300 hover:bg-white/10 transition-colors">
              <Send size={15} />
            </a>
            <a href={site.instagramHref} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-ivory/70 hover:text-bronze-300 hover:bg-white/10 transition-colors">
              <Instagram size={15} />
            </a>
            <a href={site.phoneHref} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-ivory/70 hover:text-bronze-300 hover:bg-white/10 transition-colors">
              <Phone size={15} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-ivory font-display font-bold text-sm mb-4 tracking-wide">MENYU</h4>
          <ul className="space-y-2.5 text-sm text-ivory/55">
            <li><Link to="/" className="hover:text-bronze-300 transition-colors">Bosh sahifa</Link></li>
            <li><Link to="/mahsulotlar" className="hover:text-bronze-300 transition-colors">Katalog</Link></li>
            <li><Link to="/#aloqa" className="hover:text-bronze-300 transition-colors">Biz bilan bog‘laning</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-ivory font-display font-bold text-sm mb-4 tracking-wide">KATEGORIYALAR</h4>
          <ul className="space-y-2.5 text-sm text-ivory/55">
            {catalogGroups.map((group) => (
              <li key={group.id}>
                <Link to={`/mahsulotlar?kategoriya=${group.id}`} className="hover:text-bronze-300 transition-colors">
                  {group.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-ivory font-display font-bold text-sm mb-4 tracking-wide">ALOQA</h4>
          <ul className="space-y-2.5 text-sm text-ivory/55">
            <li>{site.phone}</li>
            <li>{site.telegram}</li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-px py-5 text-center text-ivory/35 text-xs">
          © 2026 {site.brand.toUpperCase()}. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  )
}
