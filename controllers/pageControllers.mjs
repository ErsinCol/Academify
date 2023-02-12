import nodemailer from 'nodemailer'

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

const sendMail = async (req, res) => {
  const outputMessage = `
    <h1>Mail From</h1>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h1>Message</h1>
    <p>${req.body.message}</p>
  `

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  })
  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: req.body.email,
    subject: 'Education Portal Contact Form New Message...',
    html: outputMessage
  })
  console.log('Message sent: %s', info.messageId)

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

  res.redirect('/contact')
}

export default {
  getMainPage,
  getAboutPage,
  getRegisterPage,
  getLoginPage,
  getContactPage,
  sendMail
}
