import express from 'express'
import pageRoutes from './routes/pageRoutes.mjs'
import courseRoutes from './routes/courseRoutes.mjs'
import exeConfigs from './configs/index.mjs'
import exeLoaders from './loaders/index.mjs'

const app = express()

// EXECUTE INITIAL METHODS
exeConfigs()
exeLoaders()

// MIDDLEWARES
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// ROUTES
app.use('/', pageRoutes)
app.use('/courses', courseRoutes)

// LISTEN PORT
app.listen(process.env.PORT , () => {
    console.log(`app started on port ${process.env.PORT}`)
})
