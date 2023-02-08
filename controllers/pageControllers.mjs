
const getMainPage = (req, res)=>{
    res.status(200).render('index',{
        page_name : 'index'
    })
}

const getAboutPage = (req, res)=>{
    res.status(200).render('about',{
        page_name : 'about'
    })
}

export default {
    getMainPage,
    getAboutPage
}