import pageRoutes from './pageRoutes.mjs'
import authRoutes from './authRoutes.mjs'
import categoryRoutes from './categoryRoutes.mjs'
import courseRoutes from './courseRoutes.mjs'

export default {
  '/': pageRoutes,
  '/users': authRoutes,
  '/categories': categoryRoutes,
  '/courses': courseRoutes
}
