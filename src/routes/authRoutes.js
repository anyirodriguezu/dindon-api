const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/authController');

const {
    check
} = require('express-validator');

router.post('/addUser', userCtrl.addUser)

router.post('/signin', [
    check('names').exists().isEmail(),
], userCtrl.signin);

router.post('/logout', userCtrl.logout);

module.exports = router;
