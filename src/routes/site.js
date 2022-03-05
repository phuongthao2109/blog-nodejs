const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/siteController');

router.get('/', siteController.home);
router.get('/signin', siteController.signin);
router.get('/signup', siteController.signup);
router.get('/errorPage', siteController.errorPage);
module.exports = router;
