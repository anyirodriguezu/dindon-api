const express = require('express');
const router = express.Router();
const answerCtrl = require('../controllers/answerController');
const authentication = require('../middlewares/auth');

router.get('/getAnswer', authentication.isAuth, answerCtrl.getAnswer);
router.post('/addAnswer', authentication.isAuth, answerCtrl.addAnswer);

module.exports = router;