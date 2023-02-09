import mongoose from 'mongoose'
import slugify from 'slugify'

const CourseSchema = new mongoose.Schema({
    name:{
        type: 'string',
        unique: true,
        required: true,
        trim: true
    },
    description:{
        type: 'string',
        required: true,
        trim: true
    },
    slug: {
        type: 'string',
        unique: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
},{timestamps: true, versionKey:false})

CourseSchema.pre('validate',function(next){
    this.slug = slugify(this.name, {
        lower: true,
        strict: true,
        replacement: '-',
        trim : true
    })
    next()
})

export default mongoose.model('course', CourseSchema)