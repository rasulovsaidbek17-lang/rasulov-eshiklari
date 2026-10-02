const sendJson = (response, status, body) => response.status(status).json(body)

export default async function handler(request, response) {
  if (request.method !== 'POST') return sendJson(response, 405, { error: 'Method not allowed' })

  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_IDS } = process.env
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_IDS) {
    return sendJson(response, 500, { error: 'Telegram sozlamalari kiritilmagan' })
  }

  let data
  try {
    data = typeof request.body === 'string' ? JSON.parse(request.body) : request.body
  } catch {
    return sendJson(response, 400, { error: 'Noto‘g‘ri so‘rov' })
  }

  const name = String(data?.name || '').trim()
  const phone = String(data?.phone || '').trim()
  if (name.length < 2 || phone.replace(/\D/g, '').length < 9) {
    return sendJson(response, 400, { error: 'Ism yoki telefon raqami noto‘g‘ri' })
  }

  const message = [
    'Yangi murojaat — sayt orqali',
    `Ism: ${name}`,
    `Telefon: ${phone}`,
  ].join('\n')
  const chatIds = TELEGRAM_CHAT_IDS.split(',').map((id) => id.trim()).filter(Boolean)

  try {
    await Promise.all(chatIds.map(async (chatId) => {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      })
      if (!response.ok) throw new Error('Telegram request failed')
    }))
    return sendJson(response, 200, { ok: true })
  } catch {
    return sendJson(response, 502, { error: 'Telegramga yuborishda xatolik yuz berdi' })
  }
}