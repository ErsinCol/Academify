import express from 'express'
import categoryControllers from '../controllers/categoryControllers.mjs'

const routers = express.Router()

routers.route('/').post(categoryControllers.createCategory)

export default routers
