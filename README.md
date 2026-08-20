# Eshik va Mebel — Website

Toshkentdagi eshik va mebel kompaniyasi uchun premium, to'liq responsive React sayti.

## Texnologiyalar

- React 18 + Vite
- Tailwind CSS
- React Router (sahifalar orasida navigatsiya)
- Lucide Icons

## Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda `http://localhost:5173` manzilini oching.

## Production build

```bash
npm run build
npm run preview   # tayyor buildni tekshirish uchun
```

`npm run build` buyrug'idan so'ng `dist/` papkasi hosil bo'ladi — uni istalgan hosting
(Netlify, Vercel, oddiy statik server) ga yuklashingiz mumkin.

## Loyiha tuzilishi

```
src/
  components/   -> Navbar, Hero, Features, Categories, ProductCard, Portfolio, About,
                    Testimonials, CTA, Contact, Footer, StickyActionBar
  pages/        -> Home, ProductsPage, ProductDetail, PortfolioPage, AboutPage,
                    ContactPage, NotFound
  data/         -> products.js (mahsulotlar/kategoriyalar/portfolio/testimonial matnlari)
                    site.js (telefon, telegram, manzil va boshqa aloqa ma'lumotlari)
  hooks/        -> useReveal (scroll animatsiyasi), useSEO (title/description)
public/
  images/       -> barcha rasm fayllari
```

## Rasmlarni almashtirish

`public/images/` papkasidagi rasmlarni xuddi shu fayl nomlari bilan almashtiring —
kod hech narsani o'zgartirmasdan yangi rasmlarni ko'rsatadi:

```
public/images/hero.jpg
public/images/doors/interior-door-1.jpg
public/images/doors/interior-door-2.jpg
public/images/doors/entrance-door-1-1.jpg
public/images/kitchen/kitchen-1.jpg
public/images/bedroom/bedroom-1.jpg
public/images/living/living-1.jpg
public/images/portfolio/project-1.jpg
public/images/portfolio/project-2.jpg
public/images/portfolio/project-3.jpg
public/images/about.jpg
```

## Matn va ma'lumotlarni tahrirlash

- **Telefon, Telegram, Instagram, manzil**: `src/data/site.js`
- **Mahsulotlar, narxlar, kategoriyalar, portfolio, mijozlar fikri**: `src/data/products.js`

Bu ikkita faylni tahrirlash orqali dasturchi bo'lmasangiz ham saytdagi barcha
matn va narxlarni yangilay olasiz.

## Xarita (Aloqa sahifasi)

`src/components/Contact.jsx` faylida Google Maps iframe manzili bor
(`src="https://www.google.com/maps?q=Tashkent&output=embed"`). `q=Tashkent`
qismini haqiqiy manzilingizga almashtiring, masalan `q=Toshkent+Chilonzor+9`.

## GitHub'ga yuklash va hosting qilish

**GitHub'ga qaysi fayllarni yuklash kerak?** — Butun loyiha papkasi, lekin `node_modules` va `dist` papkalarisiz (ular `.gitignore` da allaqachon belgilangan, git ularni avtomatik o'tkazib yuboradi). Ya'ni: `src/`, `public/`, `package.json`, `vite.config.js`, `tailwind.config.js`, `index.html` va shu kabi fayllarni yuklaysiz — **build qilingan `dist` papkasini emas**.

`dist` papkasini to'g'ridan-to'g'ri GitHub'ga yuklab, GitHub Pages orqali ochishga urinish odatda ishlamaydi, chunki:
1. Vite build'i asset yo'llarini `/assets/...` (root-relative) qilib yaratadi — bu GitHub Pages'dagi `username.github.io/repo-nomi/` kabi ost-papka manzilida ishlamaydi (`base` sozlamasi kerak).
2. Bu — React Router bilan ishlaydigan SPA (Single Page Application). `/mahsulotlar` yoki `/aloqa` kabi manzilni to'g'ridan-to'g'ri ochsangiz yoki sahifani yangilasangiz, server bu yo'lni topa olmay 404 beradi — bunga maxsus "SPA fallback" sozlamasi kerak (loyihada bu allaqachon tayyorlangan: `public/_redirects` — Netlify uchun, `vercel.json` — Vercel uchun).

**Eng oson va tavsiya etiladigan yo'l — GitHub'ni Netlify yoki Vercel'ga ulash:**

1. Kodni GitHub'ga yuklang:
   ```bash
   git init
   git add .
   git commit -m "Rasulov sayti"
   git branch -M main
   git remote add origin https://github.com/FOYDALANUVCHI_NOMI/repo-nomi.git
   git push -u origin main
   ```
2. [app.netlify.com](https://app.netlify.com) yoki [vercel.com](https://vercel.com) da GitHub akkauntingiz bilan kiring.
3. "Import from GitHub" / "Add New Project" tugmasini bosib, repozitoriyani tanlang.
4. Build sozlamalari **avtomatik** aniqlanadi (Vite loyihasi ekanini o'zi taniydi):
   - Build command: `npm run build`
   - Publish/Output directory: `dist`
5. "Deploy" tugmasini bosing — bir necha daqiqada sayt tayyor havola bilan ishga tushadi. Bundan keyin GitHub'ga har safar yangi `push` qilganingizda sayt **avtomatik** yangilanadi.

Bu usul `dist` papkasini qo'lda yuklashdan ko'ra ancha ishonchli, chunki build jarayonini hosting xizmatining o'zi bajaradi va SPA yo'naltirish avtomatik ishlaydi.



Bu — statik frontend loyiha. Aloqa formasi client-side validatsiyadan so'ng
ma'lumotlarni tayyor WhatsApp xabari sifatida biznes raqamiga yuboradi.
WhatsApp ochilgach, xabarni yuborishni foydalanuvchi tasdiqlaydi.
