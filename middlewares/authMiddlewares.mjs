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

export default {
  checkAuth,
  alreadySession
}
