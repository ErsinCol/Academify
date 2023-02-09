import User from '../models/User.mjs'

const insert = (data) => {
  return new User(data).save()
}

const findWhere = (where) => {
  return User.findOne(where)
}

export default {
  insert,
  findWhere
}
