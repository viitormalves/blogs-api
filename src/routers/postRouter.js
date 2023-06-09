const express = require('express');

const { postController } = require('../controllers');
const validateToken = require('../middleware/validateToken');

const router = express.Router();

router.post('/', validateToken, postController.addBlogPost);
router.get('/search', validateToken, postController.searchTerm);
router.get('/', validateToken, postController.getAllPosts);
router.get('/:id', validateToken, postController.getPostById);
router.put('/:id', validateToken, postController.updatedPostById);
router.delete('/:id', validateToken, postController.deletePost);

module.exports = router;