import express from 'express'
import courseControllers from '../controllers/courseControllers.mjs'

const routers = express.Router()

routers.route('/').post(courseControllers.createCourse)
routers.route('/').get(courseControllers.getAllCourse)

export default routers