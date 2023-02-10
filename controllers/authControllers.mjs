import AuthService from '../services/authService.mjs'
import CategoryService from '../services/categoryService.mjs'
import bcrypt from 'bcrypt'

const createUser = (req, res) => {
  AuthService.insert(req.body)
    .then(user => {
      if (!user) return res.status(500).json({ type: 'error', message: 'fail create user' })
      res.redirect('/login')
    })
    .catch(err => {
      res.status(500).json({ type: 'error', message: err })
    })
}

const loginUser = async (req, res) => {
  const { email, password } = req.body
  await AuthService.findWhere({ email })
    .then(user => {
      if (!user) return res.status(404).json({ type: 'error', message: 'not found user' })
      bcrypt.compare(password, user.password, (err, same) => {
        if (err) return res.status(500).json({ type: 'error', message: err })
        if (same) {
          req.session.userID = user._id
          res.status(200).redirect('/users/dashboard')
        } else {
          return res.status(401).json({ type: 'error', message: 'not correct password' })
        }
      })
    })
    .catch(err => {
      res.status(500).json({ type: 'error', message: err })
    })
}

const logoutUser = async (req, res) => {
  req.session.destroy(() => {
    res.status(200).redirect('/')
  })
}

const getDashboardPage = async (req, res) => {
  let sessionUser, categories
  await Promise.all([AuthService.findWhere({ _id: req.session.userID }), CategoryService.list()])
    .then(([user, cats]) => {
      sessionUser = user,
      categories = cats
    })
  res.status(200).render('dashboard', {
    page_name: 'dashboard',
    sessionUser,
    categories
  })
}

export default {
  createUser,
  loginUser,
  logoutUser,
  getDashboardPage
}
