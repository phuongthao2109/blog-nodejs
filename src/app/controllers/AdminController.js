const Course = require('../models/Course');
const { mongooseToObject, mutipleMongooseToObject } = require('../../ultils/mongoose')

class AdminController {
    dashboard(req, res, next) {
        res.render('admin/dashboard')
    }
    listCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deleteCount]) => {
                res.render('admin/Course/list', {
                    deleteCount: deleteCount,
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next)


        //lấy tất cả các bản ghi đã xóa
        // Course.countDocumentsDeleted()
        // .then(deleteCount =>{
        //     console.log('deleteCount', deleteCount)
        // }) 
        // Course.find({})
        //     .then(courses => { res.render('admin/Course/list', { courses: mutipleMongooseToObject(courses) }) })
        //     .catch(next)
    }
    create(req, res, next) {
        res.render('admin/Course/create')
    }

    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course.save().then(() => res.redirect('/admin/courses'))
    }

    getOldData(req, res, next) {
        Course.findById(req.params.id)
            .then(oldcourse => {
                res.render('admin/Course/edit', {
                    oldcourse: mongooseToObject(oldcourse)
                })
            })
            .catch(next)
    }
    edit(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/courses'))
            .catch(next)
    }
    //soft delete
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    courseBind(req, res, next) {
        Course.findDeleted({})
            .then(courses => { res.render('admin/Course/bin', { courses: mutipleMongooseToObject(courses) }) })
            .catch(next)
    }
    RestorecourseBind(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //delete 
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: {$in: req.body.cousersIds}})
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            default:
                res.json({ message: "Action is invalid!" })
        }
    }
}

module.exports = new AdminController();
