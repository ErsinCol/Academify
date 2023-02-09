import express from 'express'
import authControllers from '../controllers/authControllers.mjs'
const routers = express.Router()

routers.route('/signup').post(authControllers.createUser) // http://localhost:3000/users/signup

export default routers