import Category from '../models/Category.mjs'

const insert = (data)=>{
    return new Category(data).save()
}

const list = ()=>{
    return Category.find({})
}

const findWhere = (where)=>{
    return Category.findOne(where)
}

export default{
    insert,
    list,
    findWhere
}