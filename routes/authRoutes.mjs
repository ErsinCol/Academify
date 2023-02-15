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


/*
EDUCATION PORTAL 
====================================================
Preparation 
------------
```
npm  install
```
Starting application 
--------------------
```
npm run start
```
Fixed linter
--------------------
```
npm run lint
```

Endpoints
--------------------
```
https://localhost:3000
```

Users Endpoints 

`/users/signup` Post - User register

`/users/login` Post - User login

`/users/logout` GET - User logout

`/users/dashboard` GET - Personalized dashboard content

`/users/:id` DELETE - Delete user by admin

Category Endpoints 

`/categories` POST - Create category by admin
`/categories/:id` DELETE - Delete category by admin

Course Endpoints 

`/courses` POST - Create course by teacher
`/courses` GET - Get all courses
`/courses/:slug` GET - Get single course
`/courses/:slug` DELETE - Delete single course by teacher
`/courses/:slug` PUT - Update single course by teacher
`/courses/enroll` POST - Enroll course by student
`/courses/release` GET - Release course by student


Page Endpoints 

`/` GET - Show main ejs page 
`/about` GET - Show about ejs page
`/login` GET - Show login ejs page
`/register` GET - Show register ejs page
`/contact` GET - Show about ejs page
`/contact` POST - Send email communication - contact page

*/