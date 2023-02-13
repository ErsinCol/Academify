import BaseService from './baseService.mjs'
import Course from '../models/Course.mjs'
class CourseService extends BaseService {
  constructor () {
    super(Course)
  }

  listByQuery (filter) {
    return Course.find({
      $or: [
        { name: { $regex: '.*' + filter.name + '.*', $options: 'i' } },
        { category: filter.category }
      ]
    })
  }

  listCourseByTeacher(where){
    return Course.find(where)
  }
}

export default new CourseService()
