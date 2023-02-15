import express from 'express'
import authControllers from '../controllers/authControllers.mjs'
import authMiddlewares from '../middlewares/authMiddlewares.mjs'
import schema from '../validations/User.mjs'
import { validate } from '../middlewares/validate.mjs'

const routers = express.Router()

routers.route('/signup').post(validate(schema.register, 'body', '/register'), authControllers.createUser)  // /users/signup 
routers.route('/login').post(validate(schema.login, 'body', '/login'), authControllers.loginUser)
routers.route('/logout').get(authControllers.logoutUser)
routers.route('/dashboard').get(authMiddlewares.checkAuth, authControllers.getDashboardPage)

export default routers
