const newRouter = require('./news');
const siteRouter = require('./site');
const CourseController = require('./course');
// const AdminController = require('./admin');
function route(app) {
    app.use('/news', newRouter);
    app.use('/', siteRouter);
    app.use('/course', CourseController);
    // app.use('/admin',AdminController);
}
module.exports = route;
