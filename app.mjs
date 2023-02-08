import express from 'express';
import pageRoutes from './routes/pageRoutes.mjs'

const app = express();

// MIDDLEWARES
app.use(express.static('public'))
app.set('view engine', 'ejs')

// ROUTES
app.use('/', pageRoutes)

const port = 3000;
app.listen(port, () => {
    console.log(`app started on port ${port}`);
});
