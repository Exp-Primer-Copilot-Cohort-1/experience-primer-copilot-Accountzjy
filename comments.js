//Create web server

const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//Create new comment
router.post('/', auth, multer, commentsCtrl.createComment);

//Get all comments
router.get('/', auth, commentsCtrl.getAllComments);

//Get one comment
router.get('/:id', auth, commentsCtrl.getOneComment);

//Modify comment
router.put('/:id', auth, multer, commentsCtrl.modifyComment);

//Delete comment
router.delete('/:id', auth, commentsCtrl.deleteComment);

module.exports = router;