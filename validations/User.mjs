// joi ile nesneler oluşturcaz keyler kuralları karşılayan schema lar oluşturucaz export edicez
import joi from 'joi'

const register = joi.object({
  name: joi.string().alphanum().min(2).required(),
  email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: joi.string().min(6).required(),
  role: joi.string().valid('teacher', 'student')
})

export default {
  register
}
