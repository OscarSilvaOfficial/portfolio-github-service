import { cache } from './cache.middleware';

const STATUS_CODE_OK = 200
const STATUS_CODE_FORBIDDEN = 403
const DEFAULT_LIMIT = "xxx"

export class CompositeMiddlewares {

  configureCache() {
    return cache.route({ 
      expire: {
        [STATUS_CODE_OK]: 120,
        [STATUS_CODE_FORBIDDEN]: 0,
        [DEFAULT_LIMIT]: 10
      }
    })
  }
  
  static compose(): any[] {
    const _this = new CompositeMiddlewares()
    const CACHE = _this.configureCache()
    return [CACHE]
  }

}