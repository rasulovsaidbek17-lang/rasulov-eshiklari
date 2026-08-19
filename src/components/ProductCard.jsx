import { Link } from 'react-router-dom'
import { site } from '../data/site'

export default function ProductCard({ product, index = 0 }) {
  return (
    <div
      data-reveal
      style={{ animationDelay: `${(index % 6) * 70}ms` }}
      className="group flex flex-col rounded-2xl border border-charcoal/8 bg-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_18px_40px_-16px_rgba(23,21,18,0.25)]"
    >
      <Link to={`/mahsulot/${product.id}`} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-charcoal/80 text-ivory text-[11px] font-medium tracking-wide px-3 py-1">
          {product.categoryLabel}
        </span>
      </Link>

      <div className="flex flex-col gap-3 p-5">
        <div>
          <h3 className="font-display font-bold text-charcoal text-[15px] leading-snug">{product.name}</h3>
          <p className="text-charcoal-400 text-sm mt-1 line-clamp-2">{product.description}</p>
        </div>

        <div className="flex items-center gap-1.5">
          {product.colors.slice(0, 4).map((c) => (
            <span
              key={c}
              title={c}
              className="h-4 w-4 rounded-full border border-charcoal/10"
              style={{ backgroundColor: colorSwatch(c) }}
            />
          ))}
        </div>

        <p className="font-display font-bold text-bronze-600 text-base">{product.priceLabel}</p>

        <div className="mt-1 flex items-center gap-2">
          <Link
            to={`/mahsulot/${product.id}`}
            className="flex-1 text-center rounded-full border border-charcoal/15 hover:border-charcoal/40 text-charcoal text-sm font-semibold py-2.5 transition-colors"
          >
            Batafsil
          </Link>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center rounded-full bg-bronze-500 hover:bg-bronze-400 text-ivory text-sm font-semibold py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-10px_rgba(168,121,62,0.6)]"
          >
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
