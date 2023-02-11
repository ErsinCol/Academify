import CourseService from '../services/courseServices.mjs'
import CategoryService from '../services/categoryService.mjs'

const createCourse = (req, res) => {
  const course = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    byTeacher: req.session.userID
  }
  // user teacher mı nasıl kontrol ederiz
  CourseService.insert(course)
    .then(course => {
      if (!course) {
        return res.status(500).json({
          type: 'error',
          message: 'Not created course'
        })
      }
      res.redirect('/courses')
    })
    .catch(err => {
      res.status(500).json({
        type: 'error',
        message: err
      })
    })
}

const getAllCourse = async (req, res) => {
  const categorySlug = req.query.categories

  if (categorySlug) {
    let filter = {}
    await CategoryService.findWhere({ slug: categorySlug })
      .then(returnedCat => {
        filter = { category: returnedCat._id }
      })
    Promise.all([
      CategoryService.list(),
      CourseService.listByCategory(filter)
    ]).then(([categories, courses]) => {
      res.status(200).render('courses', {
        page_name: 'courses',
        courses,
        categories
      })
    }).catch(err => {
      res.status(500).json({
        type: 'error',
        message: err
      })
    })
  } else {
    Promise.all([
      CategoryService.list(),
      CourseService.list()
    ]).then(([categories, courses]) => {
      res.status(200).render('courses', {
        page_name: 'courses',
        courses,
        categories
      })
    }).catch(err => {
      res.status(500).json({
        type: 'error',
        message: err
      })
    })
  }
}

const getCourse = (req, res) => {
  Promise.all([
    CategoryService.list(),
    CourseService.findWhere({ slug: req.params.slug }).populate('byTeacher')
  ])
    .then(([categories, course]) => {
      if (!course) {
        return res.status(404).json({
          type: 'error',
          message: 'not found course'
        })
      }
      res.status(200).render('course', {
        page_name: 'courses',
        course,
        categories
      })
    })
    .catch(err => {
      res.status(500).json({
        type: 'error',
        message: err
      })
    })
}

export default {
  createCourse,
  getAllCourse,
  getCourse
}
