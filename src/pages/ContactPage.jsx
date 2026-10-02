import Contact from '../components/Contact'
import { useSEO } from '../hooks/useSEO'

export default function ContactPage() {
  useSEO({
    title: 'Aloqa — Rasulov GI',
    description: '',
  })

  return (
    <main className="pt-20 md:pt-24 bg-white min-h-screen">
      <Contact />
    </main>
  )
}
