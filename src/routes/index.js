const newRouter = require('./news');
const siteRouter = require('./site');
const CourseController = require('./course');
const AdminCourseController = require('./admin/Courses');
const CategoriesController = require('./admin/Categories')
function route(app) {
    app.use('/news', newRouter);
    app.use('/', siteRouter);
    app.use('/course', CourseController);
    app.use('/admin', AdminCourseController);
    app.use('/admin/categories', CategoriesController);
  }
module.exports = route;
