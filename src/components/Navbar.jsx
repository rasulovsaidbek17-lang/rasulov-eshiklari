import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, Languages } from 'lucide-react'
import { site } from '../data/site'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar({ isOtherDoors = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const productsLabel = 'RASULOV'
  const links = [
    { to: '/boshqa-eshiklar', label: t.nav.otherDoors },
    { to: '/mahsulotlar', label: productsLabel },
    { to: '/aloqa', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-charcoal/95 border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300"
    >
      <nav className="container-px relative flex items-center justify-between h-[72px] md:h-20" aria-label={t.nav.menu}>
        <Link to={isOtherDoors ? '/boshqa-eshiklar' : '/'} className={`brand-lockup flex items-center shrink-0 gap-3 ${isOtherDoors ? 'brand-lockup-tubo' : ''}`} onClick={() => setOpen(false)}>
          {isOtherDoors ? (
            <span className="tubo-wordmark" aria-label="TUBO">TUBO</span>
          ) : (
            <>
              <img
                src="/images/logo.png"
                alt={`${site.brand} — ${site.brandTagline}`}
                className="h-[3.45rem] md:h-[3.79rem] w-auto transition-transform duration-500 ease-out hover:scale-105"
              />
              <span className="hidden border-l border-bronze-400/60 pl-3 font-display text-[13px] font-semibold tracking-[.16em] text-bronze-300 uppercase xl:inline">
                  {t.nav.brand}
              </span>
            </>
          )}
        </Link>

        <ul className="hidden lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2 items-center gap-9 whitespace-nowrap font-body text-sm text-ivory/80">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `relative py-2 transition-colors hover:text-ivory ${isActive ? 'text-ivory' : ''} after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-bronze-400 after:transition-all ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-1.5 text-ivory/70 text-xs font-semibold" title="Language">
              <Languages size={15} />
              <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Language" className="bg-transparent text-ivory outline-none cursor-pointer">
                <option value="uz" className="text-charcoal">UZ</option>
                <option value="ru" className="text-charcoal">RU</option>
                <option value="en" className="text-charcoal">EN</option>
                <option value="kk" className="text-charcoal">KK</option>
                <option value="tg" className="text-charcoal">TG</option>
                <option value="tk" className="text-charcoal">TK</option>
              </select>
            </label>
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-bronze-500 hover:bg-bronze-400 text-ivory text-sm font-semibold px-5 py-2.5 transition-colors">
              <Phone size={15} />
              {t.nav.call}
            </a>
          </div>
        </div>

        <button
          className="lg:hidden text-ivory p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.nav.close : t.nav.open}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="relative z-[60] lg:hidden bg-charcoal border-t border-white/10 animate-fadeUp">
          <ul className="container-px py-6 flex flex-col gap-1 font-body text-ivory">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 text-base border-b border-white/5 ${isActive ? 'text-bronze-300' : 'text-ivory/85'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="container-px pb-4">
            <label className="flex items-center gap-2 text-ivory/70 text-sm font-semibold">
              <Languages size={16} />
              <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Language" className="bg-transparent text-ivory outline-none cursor-pointer">
                <option value="uz" className="text-charcoal">O‘zbekcha (UZ)</option>
                <option value="ru" className="text-charcoal">Русский (RU)</option>
                <option value="en" className="text-charcoal">English (EN)</option>
                <option value="kk" className="text-charcoal">Қазақша (KK)</option>
                <option value="tg" className="text-charcoal">Тоҷикӣ (TG)</option>
                <option value="tk" className="text-charcoal">Türkmençe (TK)</option>
              </select>
            </label>
          </div>
          <div className="container-px pb-6">
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-bronze-500 text-ivory text-sm font-semibold px-5 py-3.5 w-full"
            >
              <Phone size={16} />
              {t.nav.call}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
