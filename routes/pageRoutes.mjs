import express from 'express'
import pageController from '../controllers/pageControllers.mjs'
const routers = express.Router()

routers.route('/').get(pageController.getMainPage)
routers.route('/about').get(pageController.getAboutPage)
routers.route('/register').get(pageController.getRegisterPage)
routers.route('/login').get(pageController.getLoginPage)
routers.route('/contact').get(pageController.getContactPage)
routers.route('/dashboard').get(pageController.getDashboardPage)

export default routers
