const express = require('express');
const router = express.Router();
const questionCtrl = require('../controllers/questionController');
const authentication = require('../middlewares/auth');

router.get('/getQuestion', authentication.isAuth, questionCtrl.getQuestion);
router.post('/addQuestion', authentication.isAuth, questionCtrl.addQuestion);

module.exports = router;