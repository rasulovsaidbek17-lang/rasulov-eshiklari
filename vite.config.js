import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function localTelegramApi(env) {
  return {
    name: 'local-telegram-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (request, response) => {
        if (request.method !== 'POST') {
          response.statusCode = 405
          response.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_IDS) {
          response.statusCode = 500
          response.end(JSON.stringify({ error: 'Telegram sozlamalari kiritilmagan' }))
          return
        }

        let body = ''
        for await (const chunk of request) body += chunk

        try {
          const data = JSON.parse(body)
          const name = String(data?.name || '').trim()
          const phone = String(data?.phone || '').trim()
          if (name.length < 2 || phone.replace(/\D/g, '').length < 9) {
            response.statusCode = 400
            response.end(JSON.stringify({ error: 'Ism yoki telefon raqami noto‘g‘ri' }))
            return
          }

          const message = ['Yangi murojaat — lokal sayt orqali', `Ism: ${name}`, `Telefon: ${phone}`].join('\n')
          const chatIds = env.TELEGRAM_CHAT_IDS.split(',').map((id) => id.trim()).filter(Boolean)
          await Promise.all(chatIds.map(async (chatId) => {
            const telegramResponse = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ chat_id: chatId, text: message }),
            })
            if (!telegramResponse.ok) throw new Error('Telegram request failed')
          }))

          response.statusCode = 200
          response.setHeader('Content-Type', 'application/json')
          response.end(JSON.stringify({ ok: true }))
        } catch {
          response.statusCode = 502
          response.end(JSON.stringify({ error: 'Telegramga yuborishda xatolik yuz berdi' }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), localTelegramApi(env)],
  }
})
