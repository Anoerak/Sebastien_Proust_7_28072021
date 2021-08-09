const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

const adminControllers = require('../controllers/admin');

router.get('/flaggedPosts/', auth, admin, adminControllers.getFlaggedPosts);
router.get('/users/', auth, admin, adminControllers.getStatsUsers);
router.get('/posts/', auth, admin, adminControllers.getStatsPosts);
router.get('/comments/', auth, admin, adminControllers.getStatsComments);
router.get('/flagged/', auth, admin, adminControllers.getStatsFlagged);
router.put('/flagPost/:id', auth, admin, adminControllers.unflagPost);
router.put('/deleteUser/:id',auth, admin, adminControllers.deleteAccount);
router.put('/deletePost/:id', auth, admin, adminControllers.deletePost);
router.put('/deleteComment/:id',auth, admin, adminControllers.deleteComment);

module.exports = router;