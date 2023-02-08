import Course from '../models/Course.mjs'

const insert = (data)=>{
    return new Course(data)
}

export {
    insert
}