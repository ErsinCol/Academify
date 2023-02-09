import mongoose from 'mongoose'
import slugify from 'slugify'

const CategorySchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true,
    unique: true
  },
  slug: {
    type: 'string',
    unique: true
  }
}, { versionKey: false, timestamps: true })

CategorySchema.pre('validate', function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
    replacement: '-',
    trim: true
  })
  next()
})

export default mongoose.model('category', CategorySchema)
