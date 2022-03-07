const Course = require('../models/Course');
const { mongooseToObject, mutipleMongooseToObject } = require('../../ultils/mongoose')
class CourseController {
    index(req, res, next) {
        Course.find({})
            .then(courses => { res.render('course/list', { courses: mutipleMongooseToObject(courses) }) })
            .catch(next)
    }
    detail(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => res.render('course/detail', { course: mongooseToObject(course) }))
            .catch(next)
    }

   
}

module.exports = new CourseController();
