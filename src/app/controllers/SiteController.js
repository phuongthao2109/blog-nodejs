const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../ultils/mongoose')
class SiteController {
    home(req, res, next) {
        Course.find({})
            .then(courses => {res.render('home', { courses: mutipleMongooseToObject(courses) })})
            .catch(next)
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
