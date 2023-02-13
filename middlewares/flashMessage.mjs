export default (req, res, next) => {
  res.locals.flashMessages = req.flash()
  next()
}
