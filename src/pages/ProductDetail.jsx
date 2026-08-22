import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ChevronLeft, Phone, Send, Ruler, Palette, Layers, ShieldCheck } from 'lucide-react'
import { products } from '../data/products'
import { site } from '../data/site'
import ProductCard from '../components/ProductCard'
import { useSEO } from '../hooks/useSEO'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const [activeColor, setActiveColor] = useState(0)

  useSEO({
    title: product ? `${product.name} — Rasulov GI` : 'Mahsulot topilmadi',
    description: product?.description,
  })

  if (!product) return <Navigate to="/mahsulotlar" replace />

  const colorVariants = product.colorVariants ?? product.colors.map((name, index) => ({
    name,
    image: product.gallery[index] ?? product.image,
    swatch: colorSwatch(name),
  }))
  const selectedVariant = colorVariants[activeColor] ?? colorVariants[0]
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  useEffect(() => {
    setActiveColor(0)
  }, [product.id])

  return (
    <main className="pt-28 md:pt-32 pb-20 bg-ivory min-h-screen">
      <div className="container-px">
        <Link to="/mahsulotlar" className="inline-flex items-center gap-1.5 text-charcoal-400 hover:text-charcoal text-sm font-medium mb-8">
          <ChevronLeft size={16} />
          Katalogga qaytish
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="lg:hidden mb-6">
              <p className="tick-rule text-bronze-500 text-xs font-semibold tracking-widest2 uppercase mb-3">
                {product.categoryLabel}
              </p>
              <h1 className="font-display font-extrabold text-3xl text-charcoal leading-tight">{product.name}</h1>
            </div>
            <div className={`aspect-[3/4] lg:aspect-[4/3] overflow-hidden ${product.category === 'eshiklar' ? 'bg-sand-light' : 'bg-white'}`}>
              <img
                src={selectedVariant.image}
                alt={`${product.name} — ${selectedVariant.name}`}
                className={`h-full w-full ${product.category === 'eshiklar' ? 'object-contain' : 'object-cover'}`}
              />
            </div>
          </div>

          <div>
            <p className="hidden lg:block tick-rule text-bronze-500 text-xs font-semibold tracking-widest2 uppercase mb-4">
              {product.categoryLabel}
            </p>
            <h1 className="hidden lg:block font-display font-extrabold text-3xl md:text-4xl text-charcoal leading-tight">{product.name}</h1>
            <p className="mt-4 font-display font-bold text-2xl text-bronze-600">{product.priceLabel}</p>
            <p className="mt-5 text-charcoal-400 leading-relaxed">{product.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-5">
              <Spec icon={Layers} label="Material" value={product.material} />
              <Spec icon={Ruler} label="O‘lcham" value={product.size} />
              <Spec
                icon={Palette}
                label="Ranglar"
                value={(
                  <span className="flex items-center gap-2">
                    {colorVariants.map((variant, index) => (
                      <button
                        key={variant.name}
                        type="button"
                        onClick={() => setActiveColor(index)}
                        className={`h-7 w-7 rounded-full border-2 p-0.5 transition-all ${
                          activeColor === index
                            ? 'border-bronze-500 shadow-[0_0_0_2px_rgba(168,121,62,0.18)]'
                            : 'border-charcoal/25 hover:border-bronze-400'
                        }`}
                        title={variant.name}
                        aria-label={`${variant.name} rangini tanlash`}
                        aria-pressed={activeColor === index}
                      >
                        <span className="block h-full w-full rounded-full" style={{ backgroundColor: variant.swatch ?? colorSwatch(variant.name) }} />
                      </button>
                    ))}
                  </span>
                )}
              />
              <Spec icon={ShieldCheck} label="Kafolat" value={product.warranty} />
            </dl>

            <div className="mt-10 flex gap-3">
              <a
                href={site.phoneHref}
                aria-label={`${site.phone} raqamiga qo‘ng‘iroq qilish`}
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-bronze-500 px-3 py-3 text-xs font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-bronze-400 hover:shadow-[0_12px_26px_-10px_rgba(168,121,62,0.55)] sm:px-4 sm:text-sm"
              >
                <Phone size={15} />
                Telefon qilish
              </a>
              <a
                href={site.telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-charcoal/25 px-3 py-3 text-xs font-semibold text-charcoal transition-colors hover:border-bronze-500 hover:text-bronze-600 sm:px-4 sm:text-sm"
              >
                <Send size={15} />
                Telegram
              </a>
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

function colorSwatch(name) {
  const map = {
    Qora: '#171512',
    'Yong‘oq': '#6b4a30',
    'Kul rang': '#9c9691',
    Jigarrang: '#5a3d28',
    Bej: '#D8C7AD',
    Oq: '#F5F2EC',
    Krem: '#e9dfc8',
    Kulrang: '#a8a29a',
  }
  return map[name] || '#A8793E'
}
