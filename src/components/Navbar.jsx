import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, Languages } from 'lucide-react'
import { site } from '../data/site'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar({ isOtherDoors = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const toggleMenu = () => setOpen((prev) => !prev)
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
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md shadow-[0_12px_35px_rgba(20,18,15,0.04)] transition-all duration-300">
      <nav className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 md:h-[80px] md:px-8" aria-label={t.nav.menu}>
        <Link to={isOtherDoors ? '/boshqa-eshiklar' : '/'} className="brand-lockup flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          {isOtherDoors ? (
            <span className="font-display text-base font-medium uppercase tracking-[0.2em] text-stone-900 md:text-lg" aria-label="Eshiklar olami">Eshiklar Olami</span>
          ) : (
            <>
              <img
                src="/images/logo.png"
                alt={`${site.brand} — ${site.brandTagline}`}
                className="h-[2.8rem] w-auto transition-transform duration-500 ease-out hover:scale-105 md:h-[3.3rem]"
              />
              <span className="hidden border-l border-black/10 pl-3 font-display text-[12px] font-medium uppercase tracking-[0.2em] text-stone-700 xl:inline">
                {t.nav.brand}
              </span>
            </>
          )}
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-7 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.18em] text-stone-700 lg:flex xl:gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `relative block py-2 transition-all duration-300 ${isActive ? 'text-stone-900' : 'text-stone-600 hover:text-stone-900'} after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-stone-900 after:transition-all ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center lg:flex">
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-1.5 text-xs font-medium text-stone-600" title="Language">
              <Languages size={15} className="text-stone-500" />
              <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Language" className="cursor-pointer bg-transparent text-stone-800 outline-none">
                <option value="uz" className="text-charcoal">UZ</option>
                <option value="ru" className="text-charcoal">RU</option>
                <option value="en" className="text-charcoal">EN</option>
                <option value="kk" className="text-charcoal">KK</option>
                <option value="tg" className="text-charcoal">TG</option>
                <option value="tk" className="text-charcoal">TK</option>
              </select>
            </label>
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-900 transition-all duration-300 hover:border-stone-400 hover:bg-stone-50">
              <Phone size={15} />
              {t.nav.call}
            </a>
          </div>
        </div>

        <button
          className="-mr-2 p-2 text-stone-900 lg:hidden"
          onClick={toggleMenu}
          aria-label={open ? t.nav.close : t.nav.open}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      
    </header>
    {open && createPortal(
      <div className="fixed inset-0 z-[9999] lg:hidden" aria-modal="true" role="dialog">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={toggleMenu} />

        <div className="fixed top-0 right-0 h-full w-[85vw] max-w-[360px] bg-white shadow-2xl z-[10000] flex flex-col p-6" aria-label="Mobile navigation">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <Link to={isOtherDoors ? '/boshqa-eshiklar' : '/'} onClick={() => setOpen(false)} className="font-display text-base font-medium uppercase tracking-[0.2em] text-stone-900">
                    {isOtherDoors ? 'Eshiklar Olami' : 'Rasulov GI'}
                  </Link>
                  <button
                    type="button"
                    aria-label={t.nav.close}
                    onClick={() => setOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-stone-800 transition-colors hover:border-stone-300"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="w-full">
                  <ul className="space-y-6">
                    {links.map((l) => (
                      <li key={l.to}>
                        <NavLink
                          to={l.to}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `block text-lg font-light tracking-[0.12em] uppercase transition-colors ${isActive ? 'text-neutral-900' : 'text-neutral-700 hover:text-neutral-900'}`
                          }
                        >
                          {l.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="border-t border-stone-200 pt-5">
                <label className="flex items-center justify-between gap-3 rounded-full border border-stone-200 px-4 py-3 text-sm font-medium text-stone-700">
                  <div className="flex items-center gap-2">
                    <Languages size={16} className="text-stone-500" />
                    <span>Til</span>
                  </div>
                  <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Language" className="cursor-pointer bg-transparent text-stone-800 outline-none">
                    <option value="uz" className="text-charcoal">O‘zbekcha (UZ)</option>
                    <option value="ru" className="text-charcoal">Русский (RU)</option>
                    <option value="en" className="text-charcoal">English (EN)</option>
                    <option value="kk" className="text-charcoal">Қазақша (KK)</option>
                    <option value="tg" className="text-charcoal">Тоҷикӣ (TG)</option>
                    <option value="tk" className="text-charcoal">Türkmençe (TK)</option>
                  </select>
                </label>

                <a
                  href={site.phoneHref}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-sm bg-neutral-900 px-5 py-3.5 text-sm font-medium tracking-[0.12em] uppercase text-white transition-colors duration-200 hover:bg-neutral-800"
                >
                  <Phone size={16} />
                  {t.nav.call}
                </a>
              </div>
            </div>
        </div>
      </div>,
      document.body,
    )}
    </>
  )
}
