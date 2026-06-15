import { createServer } from 'node:http'
import { randomUUID } from 'node:crypto'
import { rooms, services, testimonials } from './data.js'

const PORT = Number.parseInt(process.env.PORT || '5000', 10)

const bookings = []
const newsletterSubscribers = []

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  })
  res.end(JSON.stringify(payload))
}

const readBody = (req) =>
  new Promise((resolve, reject) => {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk

      if (body.length > 1_000_000) {
        req.destroy()
        reject(new Error('Request body is too large'))
      }
    })

    req.on('end', () => {
      if (!body) {
        resolve({})
        return
      }

      try {
        resolve(JSON.parse(body))
      } catch {
        reject(new Error('Invalid JSON body'))
      }
    })
  })

const requiredFields = (payload, fields) =>
  fields.filter((field) => !payload[field] || String(payload[field]).trim() === '')

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`)

  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {})
    return
  }

  if (req.method === 'GET' && url.pathname === '/api/health') {
    sendJson(res, 200, { status: 'ok', service: 'hotel-booking-backend' })
    return
  }

  if (req.method === 'GET' && url.pathname === '/api/rooms') {
    sendJson(res, 200, { data: rooms })
    return
  }

  if (req.method === 'GET' && url.pathname === '/api/services') {
    sendJson(res, 200, { data: services })
    return
  }

  if (req.method === 'GET' && url.pathname === '/api/testimonials') {
    sendJson(res, 200, { data: testimonials })
    return
  }

  if (req.method === 'POST' && url.pathname === '/api/bookings') {
    try {
      const payload = await readBody(req)
      const missing = requiredFields(payload, ['checkIn', 'checkOut', 'room', 'adults', 'children'])

      if (missing.length) {
        sendJson(res, 400, { message: 'Missing required fields', fields: missing })
        return
      }

      const booking = {
        id: randomUUID(),
        ...payload,
        createdAt: new Date().toISOString()
      }

      bookings.push(booking)
      sendJson(res, 201, { message: 'Booking request received', data: booking })
    } catch (error) {
      sendJson(res, 400, { message: error.message })
    }
    return
  }

  if (req.method === 'POST' && url.pathname === '/api/newsletter') {
    try {
      const payload = await readBody(req)
      const missing = requiredFields(payload, ['email'])

      if (missing.length) {
        sendJson(res, 400, { message: 'Email is required' })
        return
      }

      const subscriber = {
        id: randomUUID(),
        email: payload.email,
        createdAt: new Date().toISOString()
      }

      newsletterSubscribers.push(subscriber)
      sendJson(res, 201, { message: 'Newsletter subscription received', data: subscriber })
    } catch (error) {
      sendJson(res, 400, { message: error.message })
    }
    return
  }

  sendJson(res, 404, { message: 'Route not found' })
})

server.listen(PORT, () => {
  console.log(`Hotel backend running at http://localhost:${PORT}`)
})
