import express from 'express'
import exeConfigs from './configs/index.mjs'
import exeLoaders from './loaders/index.mjs'
import routeHandlers from './routes/index.mjs'
import exeFlashMessages from './middlewares/flashMessage.mjs'
import session from 'express-session'
import flash from 'connect-flash'
import MongoStore from 'connect-mongo'
const app = express()

// EXECUTE INITIAL METHODS
exeConfigs()
exeLoaders()

global.userIN = null

// MIDDLEWARES
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
// ROUTES
app.use('*', (req, res, next) => {
  // eslint-disable-next-line no-undef
  userIN = req.session.userID
  next()
})
app.use(flash())
app.use(exeFlashMessages)

for (const [path, handler] of Object.entries(routeHandlers)) {
  app.use(path, handler)
}

// LISTEN PORT
app.listen(process.env.PORT, () => {
  console.log(`app started on port ${process.env.PORT}`)
})
