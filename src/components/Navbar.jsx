import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { site } from '../data/site'

const links = [
  { to: '/', label: 'Bosh sahifa' },
  { to: '/mahsulotlar', label: 'Mahsulotlar' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/biz-haqimizda', label: 'Biz haqimizda' },
  { to: '/aloqa', label: 'Aloqa' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open || !isHome ? 'bg-charcoal/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.25)]' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-[72px] md:h-20" aria-label="Asosiy navigatsiya">
        <Link to="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.png"
            alt={`${site.brand} — ${site.brandTagline}`}
            className="h-9 md:h-10 w-auto transition-transform duration-500 ease-out hover:scale-105"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-9 font-body text-sm text-ivory/80">
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
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-bronze-500 hover:bg-bronze-400 text-ivory text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            <Phone size={15} />
            Qo‘ng‘iroq qilish
          </a>
        </div>

        <button
          className="lg:hidden text-ivory p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-charcoal border-t border-white/10 animate-fadeUp">
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
          <div className="container-px pb-6">
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-bronze-500 text-ivory text-sm font-semibold px-5 py-3.5 w-full"
            >
              <Phone size={16} />
              Qo‘ng‘iroq qilish
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
