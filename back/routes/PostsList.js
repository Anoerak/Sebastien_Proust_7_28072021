const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config');

const postsListControllers = require('../controllers/PostsList');
const auth = require('../middlewares/auth');

//Posts routes
router.post('/post/',auth, multer, postsListControllers.postMessage);
router.post('/post/comment/', auth, postsListControllers.postComment);

//Get routes
router.get('/getAll/', auth, postsListControllers.getAllPosts);
router.get('/getAllByPopularity/', auth, postsListControllers.getAllPostsByPopularity);
router.get('/getOne/:id', auth, postsListControllers.getOnePost);
router.get('/get/comments/:id', auth, postsListControllers.getComments);

module.exports = router;