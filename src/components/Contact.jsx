import { useState } from 'react'
import { Phone, Send, Instagram, MapPin, Mail, CheckCircle2 } from 'lucide-react'
import { site } from '../data/site'
import { useReveal } from '../hooks/useReveal'

const interestOptions = [
  'Ichki eshiklar',
  'Kirish eshiklari',
  'Oshxona mebellari',
  'Yotoqxona mebellari',
  'Mehmonxona mebellari',
  'Shkaflar',
  'Boshqa',
]

const initialForm = { name: '', phone: '', interest: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = 'Ismingizni to‘liq kiriting'
  }
  const phoneDigits = form.phone.replace(/\D/g, '')
  if (phoneDigits.length < 9) {
    errors.phone = 'Telefon raqamini to‘g‘ri kiriting'
  }
  if (!form.interest) {
    errors.interest = 'Mahsulot turini tanlang'
  }
  if (!form.message.trim() || form.message.trim().length < 5) {
    errors.message = 'Xabaringizni yozing'
  }
  return errors
}

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setForm(initialForm)
    }
  }

  return (
    <section ref={ref} id="aloqa" className="bg-white">
      <div className="container-px py-16 md:py-24">
        <div data-reveal className="max-w-2xl mb-12">
          <p className="tick-rule text-bronze-500 text-xs font-semibold tracking-widest2 uppercase mb-4">Aloqa</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal">BIZ BILAN BOG‘LANING</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div data-reveal className="space-y-6">
            <ContactRow icon={Phone} label="Telefon" value={site.phone} href={site.phoneHref} />
            <ContactRow icon={Send} label="Telegram" value={site.telegram} href={site.telegramHref} />
            <ContactRow icon={Instagram} label="Instagram" value={site.instagram} href={site.instagramHref} />
            <ContactRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
            <ContactRow icon={MapPin} label="Manzil" value={site.address} />

            <div className="rounded-2xl overflow-hidden border border-charcoal/8 aspect-[16/10] mt-8">
              <iframe
                title="Xarita — Toshkent"
                className="h-full w-full grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Tashkent&output=embed"
              />
            </div>
          </div>

          <form data-reveal onSubmit={handleSubmit} noValidate className="rounded-2xl bg-ivory p-6 md:p-8 space-y-5">
            {submitted && (
              <div className="flex items-center gap-2 rounded-xl bg-bronze-50 text-bronze-700 text-sm px-4 py-3">
                <CheckCircle2 size={18} />
                So‘rovingiz qabul qilindi. Tez orada bog‘lanamiz!
              </div>
            )}

            <Field label="Ismingiz" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="Ismingizni kiriting" />
            <Field label="Telefon raqamingiz" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="+998 90 123 45 67" type="tel" />

            <div>
              <label htmlFor="interest" className="block text-sm font-semibold text-charcoal mb-2">
                Qaysi mahsulot qiziqtiradi?
              </label>
              <select
                id="interest"
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors ${
                  errors.interest ? 'border-red-400' : 'border-charcoal/15 focus:border-bronze-400'
                }`}
              >
                <option value="">Tanlang</option>
                {interestOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              {errors.interest && <p className="mt-1.5 text-xs text-red-500">{errors.interest}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">Xabar</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Xabaringizni yozing..."
                className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors resize-none ${
                  errors.message ? 'border-red-400' : 'border-charcoal/15 focus:border-bronze-400'
                }`}
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-bronze-500 hover:bg-bronze-400 text-ivory font-semibold text-sm py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-10px_rgba(168,121,62,0.55)]"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bronze-50 text-bronze-600">
        <Icon size={18} strokeWidth={1.6} />
      </span>
      <div>
        <p className="text-charcoal-400 text-xs">{label}</p>
        <p className="text-charcoal font-semibold text-sm">{value}</p>
      </div>
    </div>
  )
  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block hover:opacity-75 transition-opacity">
        {content}
      </a>
    )
  }
  return content
}

function Field({ label, name, value, onChange, error, placeholder, type = 'text' }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-charcoal mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors ${
          error ? 'border-red-400' : 'border-charcoal/15 focus:border-bronze-400'
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  )
}
