import express from 'express'
const routers = express.Router()
import pageController from '../controllers/pageControllers.mjs'

routers.route('/').get(pageController.getMainPage)
routers.route('/about').get(pageController.getAboutPage)

export default routers