import BaseService from './baseService.mjs'
import Category from '../models/Category.mjs'
class CategoryService extends BaseService {
  constructor () {
    super(Category)
  }
}

export default new CategoryService()
