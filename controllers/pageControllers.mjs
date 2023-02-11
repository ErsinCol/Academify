const getMainPage = (req, res) => {
  console.log(req.session.userID)
  res.status(200).render('index', {
    page_name: 'index'
  })
}

const getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about'
  })
}

const getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register'
  })
}

const getLoginPage = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login'
  })
}

const getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact'
  })
}

export default {
  getMainPage,
  getAboutPage,
  getRegisterPage,
  getLoginPage,
  getContactPage
}
