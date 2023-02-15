import express from 'express'
import session from 'express-session'
import flash from 'connect-flash'
import methodOverride from 'method-override'
import MongoStore from 'connect-mongo'

import exeConfigs from './configs/index.mjs'
import exeLoaders from './loaders/index.mjs'
import exeFlashMessages from './middlewares/flashMessage.mjs'
import routeHandlers from './routes/index.mjs'

//* INITIAL METHODS
const app = express()
exeConfigs()
exeLoaders()

//* GLOBAL VARIABLES
global.userIN = null

//* MIDDLEWARES
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: process.env.SESSION_SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}` })
}))
app.use(methodOverride('_method', {
  methods: ['POST', 'GET']
}))
app.use(flash())
app.use(exeFlashMessages)
//* ROUTES
app.use('*', (req, res, next) => {
  userIN = req.session.userID
  next()
})
for (const [path, handler] of Object.entries(routeHandlers)) {
  app.use(path, handler)
}

//* LISTEN PORT
app.listen(process.env.PORT, () => {
  console.log(`app started on port ${process.env.PORT}`)
})
