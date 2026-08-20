import { Link } from 'react-router-dom'
import { ArrowUpRight, Ruler, ShoppingBag } from 'lucide-react'
import { site } from '../data/site'

export default function ProductCard({ product, index = 0 }) {
  return (
    <div
      data-reveal="scale" data-tilt
      style={{ animationDelay: `${(index % 6) * 70}ms` }}
      className="product-card group relative flex flex-col overflow-hidden rounded-2xl border border-charcoal/8 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_55px_-22px_rgba(23,21,18,0.38)]"
    >
      <Link to={`/mahsulot/${product.id}`} className={`relative block overflow-hidden ${product.category === 'eshiklar' ? 'aspect-[3/4] bg-sand-light' : 'aspect-[5/4] bg-charcoal'}`}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(event) => { event.currentTarget.src = '/images/hero.jpg' }}
          className={`h-full w-full transition-transform duration-700 ease-out ${product.category === 'eshiklar' ? 'object-contain group-hover:scale-105' : 'object-cover group-hover:scale-105'}`}
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <span className="rounded-full bg-ivory/95 px-3 py-1.5 text-[10px] font-bold tracking-[.12em] text-charcoal">
          {product.categoryLabel}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/75 text-ivory opacity-0 transition-all duration-300 group-hover:opacity-100"><ArrowUpRight size={17} /></span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4 md:gap-4 md:p-6">
        <div>
          <p className="text-[10px] font-bold tracking-[.2em] text-bronze-600 uppercase">{product.categoryLabel}</p>
          <h3 className="mt-2 font-display font-bold text-charcoal text-base leading-snug">{product.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal-400">{product.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-charcoal-400">
          <span className="inline-flex items-center gap-1.5"><Ruler size={14} className="text-bronze-600" />{product.size}</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="flex -space-x-1">{product.colors.slice(0, 3).map((color) => <span key={color} title={color} className="h-4 w-4 rounded-full border border-white" style={{ backgroundColor: colorSwatch(color) }} />)}</span>
            {product.colors.length} rang
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-charcoal/8 pt-4">
          <div><p className="text-[10px] font-medium text-charcoal-400">Boshlang‘ich narx</p><p className="mt-1 font-display text-base font-bold text-bronze-600">{product.priceLabel}</p></div>
          <span className="text-[10px] font-semibold text-charcoal-400">{product.warranty}</span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={`/mahsulot/${product.id}`}
            className="flex-1 rounded-full border border-charcoal/15 py-3 text-center text-sm font-semibold text-charcoal transition-colors hover:border-charcoal/40"
          >
            Batafsil
          </Link>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-bronze-500 py-3 text-center text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-bronze-400 hover:shadow-[0_10px_22px_-10px_rgba(168,121,62,0.6)]"
          >
            <ShoppingBag size={15} />
            Buyurtma berish
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
