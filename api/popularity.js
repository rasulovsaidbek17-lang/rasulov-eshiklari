import { Redis } from '@upstash/redis'

const sendJson = (response, status, body) => response.status(status).json(body)
const redis = Redis.fromEnv()
const COUNTS_KEY = 'rgi:product-views'

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const counts = await redis.hgetall(COUNTS_KEY)
    return sendJson(response, 200, { views: counts || {} })
  }

  if (request.method === 'POST') {
    let data
    try {
      data = typeof request.body === 'string' ? JSON.parse(request.body) : request.body
    } catch {
      return sendJson(response, 400, { error: 'Noto‘g‘ri so‘rov' })
    }

    const productId = String(data?.productId || '').trim()
    if (!/^[a-z0-9-]+$/.test(productId)) {
      return sendJson(response, 400, { error: 'Mahsulot ID noto‘g‘ri' })
    }

    const views = await redis.hincrby(COUNTS_KEY, productId, 1)
    return sendJson(response, 200, { productId, views })
  }

  response.setHeader('Allow', 'GET, POST')
  return sendJson(response, 405, { error: 'Method not allowed' })
}
