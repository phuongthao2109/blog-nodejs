const Course = require('../models/Course');
const { mongooseToObject, mutipleMongooseToObject } = require('../../ultils/mongoose')

class AdminController {
    dashboard(req, res, next) {
        res.render('admin/dashboard')
    }
    listCourses(req, res, next) {
        Course.find({})
            .then(courses => { res.render('admin/Course/list', { courses: mutipleMongooseToObject(courses) }) })
            .catch(next)
    }
    create(req, res, next) {
        res.render('admin/Course/create')
    }

    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save().then(() => res.redirect('/course'))
    }

    getOldData(req, res, next) {
        Course.findById(req.params.id)
        .then(oldcourse => { res.render('admin/Course/edit',{
            oldcourse : mongooseToObject(oldcourse) 
        })})
        .catch(next)
    }
    edit(req, res, next) {
        Course.updateOne({_id: req.params.id},req.body)
        .then(() => res.redirect('/admin/courses'))
        .catch(next)
    }
    delete(req, res, next) {
        Course.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }
}

module.exports = new AdminController();
