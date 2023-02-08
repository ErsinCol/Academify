import mongoose from 'mongoose'

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
    }
},{timestamps: true, versionKey:false})

export default mongoose.model('course', CourseSchema)