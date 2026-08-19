import { Phone, Send, ShoppingBag } from 'lucide-react'
import { site } from '../data/site'

export default function StickyActionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-charcoal/97 backdrop-blur border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <a href={site.phoneHref} className="flex flex-col items-center justify-center gap-1 py-3 text-ivory/85 text-[11px] font-medium">
          <Phone size={17} />
          Qo‘ng‘iroq
        </a>
        <a href={site.telegramHref} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 py-3 text-ivory/85 text-[11px] font-medium">
          <Send size={17} />
          Telegram
        </a>
        <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 py-3 text-bronze-300 text-[11px] font-medium">
          <ShoppingBag size={17} />
          Buyurtma
        </a>
      </div>
    </div>
  )
}
