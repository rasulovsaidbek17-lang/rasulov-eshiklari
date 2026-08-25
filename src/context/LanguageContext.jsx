import { createContext, useContext, useEffect, useState } from 'react'

const translations = {
  uz: {
    nav: { products: 'Mahsulotlar', contact: 'Biz bilan bog‘laning', call: 'Qo‘ng‘iroq qilish', menu: 'Asosiy navigatsiya', open: 'Menyuni ochish', close: 'Menyuni yopish', brand: 'Siz tanigan brend' },
    footer: { description: 'Sifatli eshiklar — uyingiz uchun eng yaxshi tanlov.', menu: 'MENYU', catalog: 'Katalog', categories: 'KATEGORIYALAR', contact: 'ALOQA', rights: 'Barcha huquqlar himoyalangan.' },
    catalog: { label: 'Barchasi', doors: 'Eshiklar', models: 'tayyor model', products: 'ta mahsulot', empty: 'Mos mahsulot topilmadi', emptyText: 'Boshqa kategoriyani tanlab yana bir bor urinib ko‘ring.', viewAll: 'Barchasini ko‘rish', types: 'turlari', startingPrice: 'Boshlang‘ich narx', colors: 'rang', details: 'Batafsil', order: 'Buyurtma berish' },
    contact: { kicker: 'Aloqa', title: 'BIZ BILAN BOG‘LANING', name: 'Ismingiz', namePlaceholder: 'Ismingizni kiriting', phone: 'Telefon raqamingiz', send: 'Yuborish', sending: 'Yuborilmoqda...', success: 'Ma’lumotlaringiz yuborildi. Tez orada siz bilan bog‘lanamiz.', error: 'Xabar yuborilmadi. Iltimos, qayta urinib ko‘ring.', invalidName: 'Ismingizni to‘liq kiriting', invalidPhone: 'Telefon raqamini to‘g‘ri kiriting', address: 'Manzil', addressText: 'Siz qayerda bo‘lsangiz ham biz sizga yetkazib beramiz', phoneLabel: 'Telefon', telegram: 'Telegram', instagram: 'Instagram', email: 'Email' },
    detail: { back: 'Katalogga qaytish', material: 'Material', size: 'O‘lcham', colors: 'Ranglar', warranty: 'Kafolat', call: 'Telefon qilish', chooseColor: 'rangini tanlash', related: 'O‘xshash mahsulotlar' }, about: { label: 'Biz haqimizda', title: 'UYINGIZ UCHUN SIFATLI TANLOV', text: 'Biz zamonaviy dizayn, sifatli material va professional xizmatni birlashtirib, mijozlarimiz uchun qulay va chiroyli yechimlar yaratamiz.', experience: 'Yillik tajriba', orders: 'Buyurtma', quality: 'Sifat kafolati' },
  },
  ru: {
    nav: { products: 'Продукты', contact: 'Связаться с нами', call: 'Позвонить', menu: 'Основная навигация', open: 'Открыть меню', close: 'Закрыть меню', brand: 'Бренд, которому доверяют' },
    footer: { description: 'Качественные двери — лучший выбор для вашего дома.', menu: 'МЕНЮ', catalog: 'Каталог', categories: 'КАТЕГОРИИ', contact: 'КОНТАКТЫ', rights: 'Все права защищены.' },
    catalog: { label: 'Все', doors: 'Двери', models: 'готовых моделей', products: 'товаров', empty: 'Подходящие товары не найдены', emptyText: 'Выберите другую категорию и попробуйте снова.', viewAll: 'Показать все', types: 'виды', startingPrice: 'Цена от', colors: 'цвета', details: 'Подробнее', order: 'Заказать' },
    contact: { kicker: 'Контакты', title: 'СВЯЖИТЕСЬ С НАМИ', name: 'Ваше имя', namePlaceholder: 'Введите имя', phone: 'Номер телефона', send: 'Отправить', sending: 'Отправка...', success: 'Ваши данные отправлены. Мы свяжемся с вами в ближайшее время.', error: 'Не удалось отправить сообщение. Попробуйте еще раз.', invalidName: 'Введите полное имя', invalidPhone: 'Введите корректный номер телефона', address: 'Адрес', addressText: 'Мы доставим заказ в любую точку, где бы вы ни находились', phoneLabel: 'Телефон', telegram: 'Телеграм', instagram: 'Инстаграм', email: 'Электронная почта' },
    detail: { back: 'Вернуться в каталог', material: 'Материал', size: 'Размер', colors: 'Цвета', warranty: 'Гарантия', call: 'Позвонить', chooseColor: 'цвет', related: 'Похожие товары' }, about: { label: 'О нас', title: 'КАЧЕСТВЕННЫЙ ВЫБОР ДЛЯ ВАШЕГО ДОМА', text: 'Мы объединяем современный дизайн, качественные материалы и профессиональный сервис, создавая удобные и красивые решения.', experience: 'Лет опыта', orders: 'Заказов', quality: 'Гарантия качества' },
  },
  en: {
    nav: { products: 'Products', contact: 'Contact us', call: 'Call us', menu: 'Main navigation', open: 'Open menu', close: 'Close menu', brand: 'A brand you know' },
    footer: { description: 'Quality doors — the best choice for your home.', menu: 'MENU', catalog: 'Catalog', categories: 'CATEGORIES', contact: 'CONTACT', rights: 'All rights reserved.' },
    catalog: { label: 'All', doors: 'Doors', models: 'ready models', products: 'products', empty: 'No matching products found', emptyText: 'Choose another category and try again.', viewAll: 'View all', types: 'types', startingPrice: 'Starting price', colors: 'colors', details: 'Details', order: 'Order now' },
    contact: { kicker: 'Contact', title: 'CONTACT US', name: 'Your name', namePlaceholder: 'Enter your name', phone: 'Phone number', send: 'Send', sending: 'Sending...', success: 'Your details were sent. We will contact you soon.', error: 'Message could not be sent. Please try again.', invalidName: 'Enter your full name', invalidPhone: 'Enter a valid phone number', address: 'Address', addressText: 'We deliver to you wherever you are', phoneLabel: 'Phone', telegram: 'Telegram', instagram: 'Instagram', email: 'Email' },
    detail: { back: 'Back to catalog', material: 'Material', size: 'Size', colors: 'Colors', warranty: 'Warranty', call: 'Call us', chooseColor: 'color', related: 'Similar products' }, about: { label: 'About us', title: 'A QUALITY CHOICE FOR YOUR HOME', text: 'We combine modern design, quality materials, and professional service to create comfortable, beautiful solutions.', experience: 'Years of experience', orders: 'Orders', quality: 'Quality guarantee' },
  },
  kk: {
    nav: { products: 'Өнімдер', contact: 'Бізбен байланысыңыз', call: 'Қоңырау шалу', menu: 'Негізгі навигация', open: 'Мәзірді ашу', close: 'Мәзірді жабу', brand: 'Сіз білетін бренд' },
    footer: { description: 'Сапалы есіктер — үйіңіз үшін ең жақсы таңдау.', menu: 'МӘЗІР', catalog: 'Каталог', categories: 'САНАТТАР', contact: 'БАЙЛАНЫС', rights: 'Барлық құқықтар қорғалған.' },
    catalog: { label: 'Барлығы', doors: 'Есіктер', models: 'дайын модель', products: 'өнім', empty: 'Сәйкес өнімдер табылмады', emptyText: 'Басқа санатты таңдап, қайта көріңіз.', viewAll: 'Барлығын көру', types: 'түрі', startingPrice: 'Бастапқы баға', colors: 'түс', details: 'Толығырақ', order: 'Тапсырыс беру' },
    contact: { kicker: 'Байланыс', title: 'БІЗБЕН БАЙЛАНЫСЫҢЫЗ', name: 'Атыңыз', namePlaceholder: 'Атыңызды енгізіңіз', phone: 'Телефон нөмірі', send: 'Жіберу', sending: 'Жіберілуде...', success: 'Деректеріңіз жіберілді. Жақында сізбен байланысамыз.', error: 'Хабарлама жіберілмеді. Қайталап көріңіз.', invalidName: 'Толық атыңызды енгізіңіз', invalidPhone: 'Дұрыс телефон нөмірін енгізіңіз', address: 'Мекенжай', addressText: 'Қай жерде болсаңыз да, сізге жеткіземіз', phoneLabel: 'Телефон', telegram: 'Telegram', instagram: 'Instagram', email: 'Электрондық пошта' },
    detail: { back: 'Каталогқа оралу', material: 'Материал', size: 'Өлшемі', colors: 'Түстері', warranty: 'Кепілдік', call: 'Телефон шалу', chooseColor: 'түсін таңдау', related: 'Ұқсас өнімдер' }, about: { label: 'Біз туралы', title: 'ҮЙІҢІЗ ҮШІН САПАЛЫ ТАҢДАУ', text: 'Біз заманауи дизайнды, сапалы материалдарды және кәсіби қызметті біріктіреміз.', experience: 'Жылдық тәжірибе', orders: 'Тапсырыс', quality: 'Сапа кепілдігі' },
  },
  tg: {
    nav: { products: 'Маҳсулотҳо', contact: 'Бо мо тамос гиред', call: 'Занг задан', menu: 'Навигатсияи асосӣ', open: 'Кушодани меню', close: 'Пӯшидани меню', brand: 'Бренди шинос' },
    footer: { description: 'Дарҳои босифат — интихоби беҳтарин барои хонаи шумо.', menu: 'МЕНЮ', catalog: 'Каталог', categories: 'КАТЕГОРИЯҲО', contact: 'ТАМОС', rights: 'Ҳамаи ҳуқуқҳо ҳифз шудаанд.' },
    catalog: { label: 'Ҳама', doors: 'Дарҳо', models: 'модели тайёр', products: 'маҳсулот', empty: 'Маҳсулоти мувофиқ ёфт нашуд', emptyText: 'Категорияи дигарро интихоб карда, дубора кӯшиш кунед.', viewAll: 'Ҳамаро дидан', types: 'намуд', startingPrice: 'Нархи ибтидоӣ', colors: 'ранг', details: 'Муфассал', order: 'Фармоиш додан' },
    contact: { kicker: 'Тамос', title: 'БО МО ТАМОС ГИРЕД', name: 'Номи шумо', namePlaceholder: 'Номро ворид кунед', phone: 'Рақами телефон', send: 'Фиристодан', sending: 'Фиристода истодаем...', success: 'Маълумоти шумо фиристода шуд. Ба зудӣ тамос мегирем.', error: 'Паём фиристода нашуд. Дубора кӯшиш кунед.', invalidName: 'Номи пурраро ворид кунед', invalidPhone: 'Рақами дурусти телефонро ворид кунед', address: 'Суроға', addressText: 'Дар ҳар куҷое бошед, мо ба шумо мерасонем', phoneLabel: 'Телефон', telegram: 'Телеграм', instagram: 'Инстаграм', email: 'Почтаи электронӣ' },
    detail: { back: 'Бозгашт ба каталог', material: 'Мавод', size: 'Андоза', colors: 'Рангҳо', warranty: 'Кафолат', call: 'Занг задан', chooseColor: 'интихоби ранг', related: 'Маҳсулоти монанд' }, about: { label: 'Дар бораи мо', title: 'ИНТИХОБИ БОСИФАТ БАРОИ ХОНАИ ШУМО', text: 'Мо тарҳи замонавӣ, маводи босифат ва хизматрасонии касбиро муттаҳид мекунем.', experience: 'Соли таҷриба', orders: 'Фармоиш', quality: 'Кафолати сифат' },
  },
  tk: {
    nav: { products: 'Önümler', contact: 'Biz bilen habarlaşyň', call: 'Jaň etmek', menu: 'Esasy nawigasiýa', open: 'Menýuny açmak', close: 'Menýuny ýapmak', brand: 'Tanaýan brendiňiz' },
    footer: { description: 'Ýokary hilli gapylar — öýüňiz üçin iň gowy saýlaw.', menu: 'MENÝU', catalog: 'Katalog', categories: 'KATEGORIÝALAR', contact: 'HABARLAŞMAK', rights: 'Ähli hukuklar goralan.' },
    catalog: { label: 'Hemmesi', doors: 'Gapylar', models: 'taýýar model', products: 'önüm', empty: 'Gabat gelýän önüm tapylmady', emptyText: 'Başga kategoriýany saýlap, täzeden synanyşyň.', viewAll: 'Hemmesini görmek', types: 'görnüş', startingPrice: 'Başlangyç baha', colors: 'reňk', details: 'Jikme-jik', order: 'Sargyt etmek' },
    contact: { kicker: 'Habarlaşmak', title: 'BIZ BILEN HABARLAŞYŇ', name: 'Adyňyz', namePlaceholder: 'Adyňyzy ýazyň', phone: 'Telefon belgisi', send: 'Ugratmak', sending: 'Ugradylýar...', success: 'Maglumatlaryňyz ugradyldy. Ýakynda siziň bilen habarlaşarys.', error: 'Habar ugradylmady. Täzeden synanyşyň.', invalidName: 'Doly adyňyzy ýazyň', invalidPhone: 'Dogry telefon belgisini ýazyň', address: 'Salgysy', addressText: 'Nirede bolsaňyz hem size eltip berýäris', phoneLabel: 'Telefon', telegram: 'Telegram', instagram: 'Instagram', email: 'Elektron poçta' },
    detail: { back: 'Kataloga dolanmak', material: 'Material', size: 'Ölçegi', colors: 'Reňkler', warranty: 'Kepillik', call: 'Jaň etmek', chooseColor: 'reňkini saýlamak', related: 'Meňzeş önümler' }, about: { label: 'Biz barada', title: 'ÖÝÜŇIZ ÜÇIN ÝOKARY HILLI SAÝLAW', text: 'Biz döwrebap dizaýny, ýokary hilli materiallary we hünär hyzmatyny birleşdirýäris.', experience: 'Ýyllyk tejribe', orders: 'Sargyt', quality: 'Hil kepilligi' },
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('rgi-language') || 'uz')

  useEffect(() => {
    localStorage.setItem('rgi-language', language)
    document.documentElement.lang = language
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}