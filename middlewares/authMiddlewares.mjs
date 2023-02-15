import authService from '../services/authService.mjs'

const checkAuth = (req, res, next) => {
  authService.findWhere({ _id: req.session.userID })
    .then(user => {
      if (!user) return res.redirect('/login')
      next()
    })
}

const alreadySession = (req, res, next) => {
  if (req.session.userID) {
    return res.redirect('/')
  }
  next()
}

export default {
  checkAuth,
  alreadySession
}
