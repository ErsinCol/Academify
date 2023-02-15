import bcrypt from 'bcrypt'
import courseServices from '../services/courseServices.mjs'
import authService from '../services/authService.mjs'
import categoryService from '../services/categoryService.mjs'

const createUser = (req, res) => {
  authService.insert(req.body)
    .then(user => {
      if (!user) return res.status(500).json({ type: 'error', message: 'fail create user' })
      req.flash('success', 'successfully registered to education portal app')
      res.redirect('/login')
    })
    .catch(err => {
      res.status(500).json({ type: 'error', message: err })
    })
}

const loginUser = (req, res) => {
  const { email, password } = req.body
  authService.findWhere({ email })
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

const logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.status(200).redirect('/')
  })
}

const getDashboardPage = (req, res) => {
  Promise.all([
    authService.findWhere({ _id: req.session.userID }).populate('courses'),
    categoryService.list(),
    courseServices.listCourseByTeacher({ user: req.session.userID })
  ]).then(([sessionUser, categories, teacherCourses]) => {
    res.status(200).render('dashboard', {
      page_name: 'dashboard',
      sessionUser,
      categories,
      teacherCourses
    })
  }).catch((err) => {
    res.status(500).json({ type: 'error', message: err })
  })
}

export default {
  createUser,
  loginUser,
  logoutUser,
  getDashboardPage
}
