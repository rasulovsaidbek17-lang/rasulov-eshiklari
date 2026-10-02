import { Link } from 'react-router-dom'
import { ArrowUpRight, Award, Ruler, ShoppingBag } from 'lucide-react'
import { site } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { getLocalizedColorName, getLocalizedProduct } from '../data/productTranslations'

export default function ProductCard({ product, index = 0, topRank = 0 }) {
  const { language, t } = useLanguage()
  const localizedProduct = getLocalizedProduct(product, language)
  return (
    <div
      data-reveal="scale" data-tilt
      style={{ animationDelay: `${(index % 6) * 70}ms` }}
      className="product-card group relative flex flex-col overflow-hidden rounded-[24px] border border-stone-200 bg-white shadow-[0_18px_48px_-30px_rgba(17,17,17,0.4)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_22px_52px_-28px_rgba(17,17,17,0.52)]"
    >
      <Link to={`/mahsulot/${product.id}`} className={`relative block overflow-hidden ${['eshiklar', 'boshqa-eshiklar'].includes(product.category) ? 'aspect-[3/4] bg-[#f3efe9]' : 'aspect-[5/4] bg-[#efe9e1]'}`}>
        <img
          src={product.image}
          alt={localizedProduct.name}
          loading="lazy"
          onError={(event) => { event.currentTarget.src = '/images/hero.jpg' }}
          className={`h-full w-full transition-all duration-500 ease-out group-hover:scale-[1.015] ${['eshiklar', 'boshqa-eshiklar'].includes(product.category) ? 'object-contain' : 'object-cover'}`}
        />

        {topRank > 0 && (
          <span
            className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-[#40362E]/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E0BC68] shadow-sm backdrop-blur-md transition-all duration-300 ease-in-out group-hover:bg-[#40362E]/90"
            aria-label={`${String(topRank).padStart(2, '0')} / TOP MODEL`}
          >
            <span>{String(topRank).padStart(2, '0')}</span>
            <span>/</span>
            <span>Top model</span>
          </span>
        )}

        <div className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 backdrop-blur-sm">
          <ArrowUpRight size={16} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">{localizedProduct.categoryLabel}</p>
          <h3 className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-800">{localizedProduct.name}</h3>
        </div>

        <p className="line-clamp-2 text-sm leading-6 text-stone-600">{localizedProduct.description}</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-600">
          <span className="inline-flex items-center gap-1.5"><Ruler size={14} className="text-stone-700" />{localizedProduct.size}</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="flex -space-x-1">{product.colors.slice(0, 3).map((color) => <span key={color} title={getLocalizedColorName(color, language)} className="h-4 w-4 rounded-full border border-white" style={{ backgroundColor: colorSwatch(color) }} />)}</span>
            {product.colors.length} {t.catalog.colors}
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-stone-200 pt-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-stone-500">{t.catalog.startingPrice}</p>
            <p className="mt-1 font-display text-lg font-semibold text-[#8f6a3d]">{localizedProduct.priceLabel}</p>
          </div>
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-stone-500">{localizedProduct.warranty}</span>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <Link
            to={`/mahsulot/${product.id}`}
            className="flex-1 rounded-full border border-stone-300 bg-white py-3 text-center text-sm font-medium text-stone-800 transition-all duration-300 hover:border-stone-400 hover:bg-stone-50"
          >
            {t.catalog.details}
          </Link>
          <a
            href={site.phoneHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-stone-900 py-3 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-stone-800"
          >
            <ShoppingBag size={15} />
            {t.catalog.order}
          </a>
        </div>
      </div>
    </div>
  )
}

function colorSwatch(name) {
  const map = {
    'Qora': '#171512',
    'Yong‘oq': '#6b4a30',
    'Kul rang': '#9c9691',
    'Jigarrang': '#5a3d28',
    'Bej': '#D8C7AD',
    'Oq': '#F5F2EC',
    'Krem': '#e9dfc8',
    'Kulrang': '#a8a29a',
  }
  return map[name] || '#A8793E'
}
