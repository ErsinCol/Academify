import express from 'express'
import authControllers from '../controllers/authControllers.mjs'
import authMiddlewares from '../middlewares/authMiddlewares.mjs'
const routers = express.Router()

routers.route('/signup').post(authControllers.createUser)
routers.route('/login').post(authControllers.loginUser)
routers.route('/logout').get(authControllers.logoutUser)
routers.route('/dashboard').get(authMiddlewares.checkAuth, authControllers.getDashboardPage)

export default routers
