class BaseService {
  constructor (BaseModel) {
    this.BaseModel = BaseModel
  }

  insert (data) {
    return new this.BaseModel(data).save()
  }

  list () {
    return this.BaseModel.find({}).sort('-createdAt')
  }

  findWhere (where) {
    return this.BaseModel.findOne(where)
  }

  updateWhere (where, data) {
    return this.BaseModel.findByIdAndUpdate(where, data, { new: true })
  }

  deleteWhere (where) {
    return this.BaseModel.findOneAndRemove(where, { new: true })
  }
}

export default BaseService
