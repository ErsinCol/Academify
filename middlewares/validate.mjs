const validate = (schema, source) => (req, res, next) => {
  const { error, value } = schema.validate(req[source])
  if (error) {
    req.flash('error', `${error.details?.map(detail => detail?.message).join(', ')}`)
    return res.status(400).redirect('/register')
  }
  Object.assign(req, value)
  return next()
}

export {
    validate
}
