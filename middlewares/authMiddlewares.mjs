import authService from '../services/authService.mjs'

// dashboard sayfasına erişmesi için authentice olmuş kullanıcımı bunu kontrol ediyoruz
const checkAuth = (req, res, next) => {
  authService.findWhere({ _id: req.session.userID })
    .then(user => {
      if (!user) return res.redirect('/login')
      next()
    })
}

// session içinde user id bilgisi varsa login ve register sayfalarına erişimi engelleme
const alreadySession = (req, res, next) => {
  if (req.session.userID) {
    return res.redirect('/')
  }
  next()
}

const checkExistRole = (req, res, next) => {
  const roles = ['student', 'teacher']
  if (!roles.includes(req.body.role)) {
    return res.status(401).json({ type: 'error', message: 'you cant do it' })
  }
  next()
}

const checkRoleTeacher = (req, res, next) => {
  if (!req.body.role === 'teacher') {
    return res.status(401).json({ type: 'error', message: 'you cant do it' })
  }
  next()
}

const checkRoleStudent = (req, res, next) => {
  if (!req.body.role === 'student') {
    return res.status(401).json({ type: 'error', message: 'you cant do it' })
  }
  next()
}

export default {
  checkAuth,
  alreadySession,
  checkExistRole,
  checkRoleTeacher,
  checkRoleStudent
}
