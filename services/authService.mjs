import BaseService from './baseService.mjs'
import User from '../models/User.mjs'

class AuthService extends BaseService {
  constructor () {
    super(User)
  }
}

export default new AuthService()
