import User from '../models/User.mjs'

const insert = (data)=>{
    return new User(data).save()
}

export default {
    insert
}