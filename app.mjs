import express from 'express'
import exeConfigs from './configs/index.mjs'
import exeLoaders from './loaders/index.mjs'
import routeHandlers from './routes/index.mjs'

const app = express()

// EXECUTE INITIAL METHODS
exeConfigs()
exeLoaders()

// MIDDLEWARES
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ROUTES
for (const [path, handler] of Object.entries(routeHandlers)) {
  app.use(path, handler)
}

// LISTEN PORT
app.listen(process.env.PORT, () => {
  console.log(`app started on port ${process.env.PORT}`)
})
