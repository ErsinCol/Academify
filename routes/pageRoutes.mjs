import express from 'express'
import pageController from '../controllers/pageControllers.mjs'
import authMiddlewares from '../middlewares/authMiddlewares.mjs'
const routers = express.Router()

routers.route('/').get(pageController.getMainPage)
routers.route('/about').get(pageController.getAboutPage)
routers.route('/register').get(authMiddlewares.alreadySession, pageController.getRegisterPage)
routers.route('/login').get(authMiddlewares.alreadySession, pageController.getLoginPage)
routers.route('/contact').get(pageController.getContactPage)

export default routers
