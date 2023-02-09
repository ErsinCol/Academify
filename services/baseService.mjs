class BaseService {
  constructor (BaseModel) {
    this.BaseModel = BaseModel
  }

  insert (data) {
    return new this.BaseModel(data).save()
  }

  list () {
    return this.BaseModel.find({})
  }

  findWhere (where) {
    return this.BaseModel.findOne(where)
  }
}

export default BaseService
