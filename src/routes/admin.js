const express = require('express');
const router = express.Router();

const AdminController = require('../app/controllers/AdminController');

router.get('/', AdminController.dashboard);
router.get('/courses', AdminController.listCourses);
router.get('/course/create', AdminController.create);
router.post('/course/store', AdminController.store)
router.get('/course/:id/edit', AdminController.getOldData);
router.patch('/course/:id', AdminController.edit);
router.delete('/course/:id', AdminController.delete);
router.get('/course/bin',AdminController.courseBind);
router.patch('/course/bin/restore/:id',AdminController.RestorecourseBind);
router.delete('/course/:id/force', AdminController.forceDelete);
module.exports = router;
