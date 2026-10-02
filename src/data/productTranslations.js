const russianProducts = {
  'knyaz-1': { name: 'Князь № 1', categoryLabel: 'Декоративные двери', description: 'Дверь Князь сочетает величие дворцового стиля и безупречный вкус. Благородный белый дизайн с золотой ручкой украсит ваш дом.', material: 'МДФ, натуральный древесный шпон', size: 'Изготавливается по замерам', warranty: 'Гарантия 5 лет', priceLabel: 'Цена по запросу' },
  versal: { name: 'Версаль', categoryLabel: 'Филенчатые двери', description: 'Версаль — идеальная дверь для интерьера, где сочетаются классический стиль, королевская роскошь и безупречный вкус.', material: 'МДФ, натуральный древесный шпон', size: 'Изготавливается по замерам', warranty: 'Гарантия 5 лет', priceLabel: 'Цена по запросу' },
  modena: { name: 'Модена', categoryLabel: 'Гладкие двери', description: 'Модена — дверь с современными линиями, неоклассической элегантностью и идеальной симметрией.', material: 'МДФ, натуральный древесный шпон', size: 'Изготавливается по замерам', warranty: 'Гарантия 5 лет', priceLabel: 'Цена по запросу' },
  verona: { name: 'Верона', categoryLabel: 'Решетчатые двери', description: 'Верона — классическая современная дверь, напоминающая о красоте и утонченности Италии.', material: 'МДФ, натуральный древесный шпон', size: 'Изготавливается по замерам', warranty: 'Гарантия 5 лет', priceLabel: 'Цена по запросу' },
  venera: { name: 'Венера', categoryLabel: 'Филенчатые двери', description: 'Венера — дверь, воплощающая красоту и утонченность.', material: 'МДФ, натуральный древесный шпон', size: 'Изготавливается по замерам', warranty: 'Гарантия 5 лет', priceLabel: 'Цена по запросу' },
  'elegant-venera': { name: 'Элегантная Венера', categoryLabel: 'Филенчатые двери', description: 'Венера — дверь, воплощающая красоту и утонченность.', material: 'МДФ, натуральный древесный шпон', size: 'Изготавливается по замерам', warranty: 'Гарантия 5 лет', priceLabel: 'Цена по запросу' },
  'versailles-1': { name: 'Версаль № 1', categoryLabel: 'Двери со стеклом', description: 'Версаль — воплощение роскоши дворцовых интерьеров и изящных декоративных узоров.', material: 'МДФ, натуральный древесный шпон', size: 'Изготавливается по замерам', warranty: 'Гарантия 5 лет', priceLabel: 'Цена по запросу' },
  'versailles-2': { name: 'Версаль № 2', categoryLabel: 'Двери со стеклом', description: 'Версаль — воплощение роскоши дворцовых интерьеров и изящных декоративных узоров.', material: 'МДФ, натуральный древесный шпон', size: 'Изготавливается по замерам', warranty: 'Гарантия 5 лет', priceLabel: 'Цена по запросу' },
  'versailles-3': { name: 'Версаль № 3', categoryLabel: 'Двери со стеклом', description: 'Версаль — воплощение роскоши дворцовых интерьеров и изящных декоративных узоров.', material: 'МДФ, натуральный древесный шпон', size: 'Изготавливается по замерам', warranty: 'Гарантия 5 лет', priceLabel: 'Цена по запросу' },
  'versailles-4': { name: 'Версаль № 4', categoryLabel: 'Двери со стеклом', description: 'Версаль — воплощение роскоши дворцовых интерьеров и изящных декоративных узоров.', material: 'МДФ, натуральный древесный шпон', size: 'Изготавливается по замерам', warranty: 'Гарантия 5 лет', priceLabel: 'Цена по запросу' },
  'versailles-5': { name: 'Версаль № 5', categoryLabel: 'Двери со стеклом', description: 'Версаль — воплощение роскоши дворцовых интерьеров и изящных декоративных узоров.', material: 'МДФ, натуральный древесный шпон', size: 'Изготавливается по замерам', warranty: 'Гарантия 5 лет', priceLabel: 'Цена по запросу' },
  'knyaz-2': { name: 'Князь № 2', categoryLabel: 'Декоративные двери', description: 'Дверь Князь сочетает величие дворцового стиля и безупречный вкус. Благородный дизайн украсит ваш дом.', material: 'МДФ, натуральный древесный шпон', size: 'Изготавливается по замерам', warranty: 'Гарантия 5 лет', priceLabel: 'Цена по запросу' },
  'versailles-6': { name: 'Версаль № 6', categoryLabel: 'Двери со стеклом', description: 'Версаль — воплощение роскоши дворцовых интерьеров и изящных декоративных узоров.', material: 'МДФ, натуральный древесный шпон', size: 'Изготавливается по замерам', warranty: 'Гарантия 5 лет', priceLabel: 'Цена по запросу' },
}

const productCopy = {
  en: {
    categories: { dekorli: 'Decorative doors', obkladli: 'Paneled doors', obkladsiz: 'Flush doors', reshotkali: 'Grille doors', oynali: 'Glass doors' },
    descriptions: {
      'knyaz-1': 'Knyaz combines the grandeur of palace style with impeccable taste. Its noble white design and gold handle add distinction to your home.',
      versal: 'Versailles is an interior door where classic style, royal luxury, and refined taste come together.',
      modena: 'Modena combines modern lines, neoclassical elegance, and perfect symmetry.',
      verona: 'Verona is a classic-modern door inspired by the beauty and sophistication of Italy.',
      venera: 'Venera is a door that embodies beauty and refined elegance.',
      'elegant-venera': 'Elegant Venera is a door that embodies beauty and refined elegance.',
      'knyaz-2': 'Knyaz combines the grandeur of palace style with impeccable taste. Its noble design adds distinction to your home.',
      default: 'Versailles embodies the luxury of palace interiors with elegant decorative details.',
    },
    material: 'MDF, natural wood veneer', size: 'Made to measure', warranty: '5-year warranty', priceLabel: 'Price on request', colors: { Oq: 'White', 'Yong‘oq': 'Walnut', Gold: 'Gold' },
  },
  kk: {
    categories: { dekorli: 'Сәндік есіктер', obkladli: 'Филенкалы есіктер', obkladsiz: 'Тегіс есіктер', reshotkali: 'Торлы есіктер', oynali: 'Шыны есіктер' },
    description: 'Бұл есік заманауи дизайнды, жоғары талғамды және үйге арналған сапалы шешімді үйлестіреді.', material: 'МДФ, табиғи ағаш шпоны', size: 'Өлшем бойынша жасалады', warranty: '5 жыл кепілдік', priceLabel: 'Бағасы сұраныс бойынша', colors: { Oq: 'Ақ', 'Yong‘oq': 'Жаңғақ', Gold: 'Алтын' },
  },
  tg: {
    categories: { dekorli: 'Дарҳои ороишӣ', obkladli: 'Дарҳои филенкадор', obkladsiz: 'Дарҳои ҳамвор', reshotkali: 'Дарҳои панҷарадор', oynali: 'Дарҳои шишадор' },
    description: 'Ин дар тарҳи замонавӣ, завқи баланд ва ҳалли босифатро барои хонаи шумо муттаҳид мекунад.', material: 'МДФ, рӯйпӯши чӯби табиӣ', size: 'Аз рӯи ченак сохта мешавад', warranty: 'Кафолати 5 сол', priceLabel: 'Нарх бо дархост', colors: { Oq: 'Сафед', 'Yong‘oq': 'Чормағз', Gold: 'Тиллоӣ' },
  },
  tk: {
    categories: { dekorli: 'Bezegli gapylar', obkladli: 'Filýonkaly gapylar', obkladsiz: 'Tekiz gapylar', reshotkali: 'Gözenekli gapylar', oynali: 'Aýnaly gapylar' },
    description: 'Bu gapy döwrebap dizaýny, ýokary zevki we öýüňiz üçin ýokary hilli çözgüdi birleşdirýär.', material: 'MDF, tebigy agaç şpony', size: 'Ölçeg boýunça taýýarlanýar', warranty: '5 ýyl kepillik', priceLabel: 'Bahasy sorag boýunça', colors: { Oq: 'Ak', 'Yong‘oq': 'Hoş hoz', Gold: 'Altyn' },
  },
}

export function getLocalizedProduct(product, language) {
  if (language === 'ru') return { ...product, ...russianProducts[product.id] }
  const copy = productCopy[language]
  if (!copy) return product
  return {
    ...product,
    categoryLabel: copy.categories[product.subcategory] || copy.categories.dekorli,
    description: copy.descriptions?.[product.id] || copy.description,
    material: copy.material,
    size: copy.size,
    warranty: copy.warranty,
    priceLabel: copy.priceLabel,
    name: product.id === 'elegant-venera' ? `${language === 'kk' ? 'Элегантті' : language === 'tg' ? 'Венераи зебо' : 'Elegant Venera'}` : product.name,
    colors: product.colors.map((color) => copy.colors[color] || color),
  }
}

export function getLocalizedColorName(color, language) {
  if (language === 'ru') return { Oq: 'Белый', 'Yong‘oq': 'Орех', Gold: 'Золотой' }[color] || color
  return productCopy[language]?.colors[color] || color
}

const categoryNames = {
  ru: { eshiklar: 'Двери', oynali: 'Двери со стеклом', dekorli: 'Декоративные двери', obkladli: 'Филенчатые двери', obkladsiz: 'Гладкие двери', reshotkali: 'Решетчатые двери' },
  kk: { eshiklar: 'Есіктер', oynali: 'Шыны есіктер', dekorli: 'Сәндік есіктер', obkladli: 'Филенкалы есіктер', obkladsiz: 'Тегіс есіктер', reshotkali: 'Торлы есіктер' },
  tg: { eshiklar: 'Дарҳо', oynali: 'Дарҳои шишадор', dekorli: 'Дарҳои ороишӣ', obkladli: 'Дарҳои филенкадор', obkladsiz: 'Дарҳои ҳамвор', reshotkali: 'Дарҳои панҷарадор' },
  tk: { eshiklar: 'Gapylar', oynali: 'Aýnaly gapylar', dekorli: 'Bezegli gapylar', obkladli: 'Filýonkaly gapylar', obkladsiz: 'Tekiz gapylar', reshotkali: 'Gözenekli gapylar' },
}

export function getLocalizedCategoryName(name, key, language) {
  return categoryNames[language]?.[key] || categoryNames[language]?.[name] || name
}