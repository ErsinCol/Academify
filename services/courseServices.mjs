import Course from '../models/Course.mjs'

const insert = (data)=>{
    return new Course(data).save()
}

const list = ()=>{
    return Course.find({})
}

export {
    insert,
    list
}