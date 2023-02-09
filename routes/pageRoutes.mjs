import express from 'express'
const routers = express.Router()
import pageController from '../controllers/pageControllers.mjs'

routers.route('/').get(pageController.getMainPage)
routers.route('/about').get(pageController.getAboutPage)
routers.route('/register').get(pageController.getRegisterPage)
routers.route('/login').get(pageController.getLoginPage)

export default routers