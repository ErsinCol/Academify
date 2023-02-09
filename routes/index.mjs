import authRoutes from './authRoutes.mjs'
import categoryRoutes from './categoryRoutes.mjs'
import pageRoutes from './pageRoutes.mjs'
import courseRoutes from './courseRoutes.mjs'

export default {
  '/': pageRoutes,
  '/categories': categoryRoutes,
  '/users': authRoutes,
  '/courses': courseRoutes
}
