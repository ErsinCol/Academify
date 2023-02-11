import express from 'express'
import courseControllers from '../controllers/courseControllers.mjs'
import authMiddlewares from '../middlewares/authMiddlewares.mjs'
const routers = express.Router()

routers.route('/').post(authMiddlewares.checkRoleTeacher, courseControllers.createCourse)
routers.route('/').get(courseControllers.getAllCourse)
routers.route('/:slug').get(courseControllers.getCourse)
routers.route('/enroll').post(courseControllers.enrollCourse)
routers.route('/release').post(courseControllers.releaseCourse)

export default routers
