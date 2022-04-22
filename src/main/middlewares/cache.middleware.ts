import RedisCache from 'express-redis-cache'
import { createClient } from 'redis'

export const cache = RedisCache({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  auth_pass: process.env.REDIS_PASSWORD,
  prefix: 'github-api',
  client: createClient(),
  expire: 120,
})  