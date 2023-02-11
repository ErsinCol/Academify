import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true
  },
  email: {
    type: 'string',
    required: true,
    unique: true
  },
  password: {
    type: 'string',
    required: true
  },
  role: {
    type: 'string',
    enum: ['student', 'teacher', 'admin'],
    default: 'student'
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'course'
    }
  ]
}, { timestamps: true, versionKey: false })

UserSchema.pre('save', function (next) {
  const user = this
  bcrypt.hash(user.password, 10, (error, hash) => {
    if (error) console.log('error :>> ', error)
    user.password = hash
    next()
  })
})

export default mongoose.model('user', UserSchema)
