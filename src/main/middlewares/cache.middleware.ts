import RedisCache from 'express-redis-cache'
import { createClient } from 'redis'
import * as enviroment from "@/main/config/enviroment"

export const cache = RedisCache({
  host: enviroment.REDIS_HOST,
  port: enviroment.REDIS_PORT,
  auth_pass: enviroment.REDIS_PASSWORD,
  prefix: 'github-api',
  expire: 120,
})  