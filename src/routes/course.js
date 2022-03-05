const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/CourseController');

router.get('/create', CourseController.create);
router.post('/store', CourseController.store);
router.get('/:slug', CourseController.detail);
router.get('/', CourseController.index);

module.exports = router;
