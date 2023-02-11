import BaseService from './baseService.mjs'
import Course from '../models/Course.mjs'
class CourseService extends BaseService {
  constructor () {
    super(Course)
  }

  listTeacherCourses (where) {
    return Course.find(where)
  }

  listByCategory (where) {
    return Course.find({ category: where.category }).sort('-createdAt')
  }
}

export default new CourseService()
