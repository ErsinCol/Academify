import Course from '../models/Course.mjs'

const insert = (data)=>{
    return new Course(data).save()
}

const list = ()=>{
    return Course.find({})
}

const findWhere = (where)=>{
    return Course.findOne(where)
}

export default{
    insert,
    list,
    findWhere
}