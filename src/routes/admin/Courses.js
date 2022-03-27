const express = require('express');
const router = express.Router();

const AdminCourseController = require('../../app/controllers/Admin/CoursesController');

router.get('/', AdminCourseController.dashboard);
router.get('/courses', AdminCourseController.listCourses);
router.get('/course/create', AdminCourseController.create);
router.post('/course/store', AdminCourseController.store);
router.post('/course/handle-form-action', AdminCourseController.handleFormAction);
router.get('/course/:id/edit', AdminCourseController.getOldData);
router.patch('/course/:id', AdminCourseController.edit);
router.delete('/course/:id', AdminCourseController.delete);
router.get('/course/bin',AdminCourseController.courseBind);
router.patch('/course/bin/restore/:id',AdminCourseController.RestorecourseBind);
router.delete('/course/:id/force', AdminCourseController.forceDelete);
module.exports = router;
