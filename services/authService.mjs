import BaseService from './baseService.mjs'
import User from '../models/User.mjs'

class AuthService extends BaseService {
  constructor () {
    super(User)
  }

  updateWhere (where, data) {
    return User.findByIdAndUpdate(where, data, { new: true })
  }
}

export default new AuthService()
