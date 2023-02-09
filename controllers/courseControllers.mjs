import courseService from '../services/courseServices.mjs'
import categoryService from '../services/categoryService.mjs'

const createCourse = (req, res) => {
  courseService.insert(req.body)
    .then(course => {
      if (!course) {
        return res.status(500).json({
          type: 'error',
          message: 'Not created course'
        })
      }
      res.status(201).json({
        type: 'success',
        course
      })
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
    await categoryService.findWhere({ slug: categorySlug })
      .then(returnedCat => {
        filter = { category: returnedCat._id }
      })
    Promise.all([
      categoryService.list(),
      courseService.listByCategory(filter)
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
      categoryService.list(),
      courseService.list()
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
  courseService.findWhere({ slug: req.params.slug })
    .then(course => {
      if (!course) {
        return res.status(404).json({
          type: 'error',
          message: 'not found course'
        })
      }
      res.status(200).render('course', {
        page_name: 'courses',
        course
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
