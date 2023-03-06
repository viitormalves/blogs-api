const express = require('express');

const { categoriesController } = require('../controllers');
const validateToken = require('../middleware/validateToken');

const router = express.Router();

router.post('/', validateToken, categoriesController.addCategory);

module.exports = router;