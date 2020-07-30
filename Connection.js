const redis = require('redis')
const REDIS_PORT = process.env.PORT || 6379

module.exports = {
  createConnection: () => {
    return new Promise((resolve, reject) => {
      const client = redis.createClient(REDIS_PORT)

      client.on('connect', () => {
        resolve(client)
      })

      client.on('error', () => {
        reject('Error: Failed to connect')
      })
    })
  }
}
