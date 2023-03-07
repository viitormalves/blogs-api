const express = require('express');

const { userController } = require('../controllers');
const validateToken = require('../middleware/validateToken');

const router = express.Router();

router.post('/', userController.addUser);
router.get('/', validateToken, userController.getAllUsers);
router.get('/:id', validateToken, userController.getUserById);
router.delete('/me', validateToken, userController.deleteUserMe);

module.exports = router;