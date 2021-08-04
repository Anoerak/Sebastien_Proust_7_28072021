const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');

const feedControllers = require('../controllers/PostsList');
const auth = require('../middleware/auth');

//Posts routes
router.post('/post/',auth, multer, feedControllers.postMessage);
router.post('/post/comment/', auth, feedControllers.postComment);

//Get routes
router.get('/getAll/', auth, feedControllers.getAllPosts);
router.get('/comment/get/:id', auth, feedControllers.getComments);

module.exports = router;