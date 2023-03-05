const express = require('express');

const { userController } = require('../controllers');
const validateToken = require('../middleware/validateToken');

const router = express.Router();

router.post('/', userController.addUser);
router.get('/', validateToken, userController.getAllUsers);

module.exports = router;