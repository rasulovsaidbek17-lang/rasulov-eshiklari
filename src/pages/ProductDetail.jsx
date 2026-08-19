import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ChevronLeft, Phone, Send, Ruler, Palette, Layers, ShieldCheck } from 'lucide-react'
import { products } from '../data/products'
import { site } from '../data/site'
import ProductCard from '../components/ProductCard'
import { useSEO } from '../hooks/useSEO'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const [activeImg, setActiveImg] = useState(0)

  useSEO({
    title: product ? `${product.name} — Rasulov GI` : 'Mahsulot topilmadi',
    description: product?.description,
  })

  if (!product) return <Navigate to="/mahsulotlar" replace />

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <main className="pt-28 md:pt-32 pb-20 bg-ivory min-h-screen">
      <div className="container-px">
        <Link to="/mahsulotlar" className="inline-flex items-center gap-1.5 text-charcoal-400 hover:text-charcoal text-sm font-medium mb-8">
          <ChevronLeft size={16} />
          Katalogga qaytish
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white">
              <img src={product.gallery[activeImg]} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex gap-3 mt-4">
              {product.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`h-16 w-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-bronze-500' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Rasm ${i + 1}`}
                >
                  <img src={g} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="tick-rule text-bronze-500 text-xs font-semibold tracking-widest2 uppercase mb-4">
              {product.categoryLabel}
            </p>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal leading-tight">{product.name}</h1>
            <p className="mt-4 font-display font-bold text-2xl text-bronze-600">{product.priceLabel}</p>
            <p className="mt-5 text-charcoal-400 leading-relaxed">{product.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-5">
              <Spec icon={Layers} label="Material" value={product.material} />
              <Spec icon={Ruler} label="O‘lcham" value={product.size} />
              <Spec icon={Palette} label="Ranglar" value={product.colors.join(', ')} />
              <Spec icon={ShieldCheck} label="Kafolat" value={product.warranty} />
            </dl>

            <div className="mt-10 rounded-2xl bg-charcoal p-6 md:p-7">
              <p className="text-ivory font-display font-bold text-lg">Ushbu mahsulot sizga yoqdimi?</p>
              <p className="text-ivory/60 text-sm mt-1.5">Bepul konsultatsiya va o‘lchov xizmati uchun bog‘laning.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-bronze-500 hover:bg-bronze-400 text-ivory font-semibold text-sm px-6 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-10px_rgba(168,121,62,0.55)]"
                >
                  <Phone size={15} />
                  Buyurtma berish
                </a>
                <a
                  href={site.telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/30 hover:border-ivory/60 text-ivory font-semibold text-sm px-6 py-3.5 transition-colors"
                >
                  <Send size={15} />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display font-bold text-2xl text-charcoal mb-6">O‘xshash mahsulotlar</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

function Spec({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze-50 text-bronze-600">
        <Icon size={16} strokeWidth={1.7} />
      </span>
      <div>
        <dt className="text-charcoal-400 text-xs">{label}</dt>
        <dd className="text-charcoal font-semibold text-sm mt-0.5">{value}</dd>
      </div>
    </div>
  )
}
