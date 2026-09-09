let cachedViews = {}

export async function loadPopularity() {
  if (typeof window === 'undefined') return cachedViews
  try {
    const response = await fetch('/api/popularity')
    if (!response.ok) throw new Error('Popularity request failed')
    const data = await response.json()
    cachedViews = data.views || {}
  } catch {
    cachedViews = {}
  }
  return cachedViews
}

export function recordProductView(productId) {
  if (typeof window === 'undefined' || !productId) return
  cachedViews[productId] = (cachedViews[productId] || 0) + 1
  window.dispatchEvent(new CustomEvent('rgi-popularity-update'))
  fetch('/api/popularity', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId }),
  }).catch(() => {})
}

export function sortByPopularity(items, views = cachedViews) {
  return [...items]
    .map((item, index) => ({ item, index }))
    .sort((a, b) => (views[b.item.id] || 0) - (views[a.item.id] || 0) || a.index - b.index)
    .map(({ item }) => item)
}
