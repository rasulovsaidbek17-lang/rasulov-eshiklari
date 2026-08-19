import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'

export default function NotFound() {
  useSEO({ title: 'Sahifa topilmadi — Rasulov GI' })
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-ivory">
      <p className="font-display font-extrabold text-bronze-400 text-6xl">404</p>
      <h1 className="font-display font-bold text-2xl text-charcoal mt-4">Sahifa topilmadi</h1>
      <p className="text-charcoal-400 mt-2 max-w-sm">Siz izlayotgan sahifa mavjud emas yoki ko‘chirilgan.</p>
      <Link to="/" className="mt-8 inline-flex items-center rounded-full bg-bronze-500 hover:bg-bronze-400 text-ivory font-semibold text-sm px-7 py-3.5 transition-colors">
        Bosh sahifaga qaytish
      </Link>
    </main>
  )
}
