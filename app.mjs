import express from 'express'
import pageRoutes from './routes/pageRoutes.mjs'
import courseRoutes from './routes/courseRoutes.mjs'
import exeConfigs from './configs/index.mjs'
import exeLoaders from './loaders/index.mjs'

const app = express()

exeConfigs()
exeLoaders()

// MIDDLEWARES
app.use(express.static('public'))
app.set('view engine', 'ejs')

// ROUTES
app.use('/', pageRoutes)
app.use('/courses', courseRoutes)

app.listen(process.env.PORT , () => {
    console.log(`app started on port ${process.env.PORT}`)
})
