const express = require('express');
const router = express.Router();

const {
  createPost,
  getPosts,
  deletePost,
  updatePost,
} = require('../controllers/postControllers');

const protect = require('../middleware/protect');

router.get('/', protect, getPosts);
router.post('/', protect, createPost);
router.delete('/:id', protect, deletePost);
router.put('/:id', protect, updatePost);

module.exports = router;
