const express = require('express');

const { postController } = require('../controllers');
const validateToken = require('../middleware/validateToken');

const router = express.Router();

router.post('/', validateToken, postController.addBlogPost);
router.get('/', validateToken, postController.getAllPosts);

module.exports = router;