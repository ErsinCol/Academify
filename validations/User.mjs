import joi from 'joi'

const register = joi.object({
  name: joi.string().required(),
  email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: joi.string().min(6).required(),
  role: joi.string().valid('teacher', 'student')
})

const login = joi.object({
  email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: joi.string().min(6).required()
})

export default {
  register,
  login
}
