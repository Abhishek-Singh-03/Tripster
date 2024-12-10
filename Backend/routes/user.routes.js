const express = require('express');
const router = express.Router();

// it will use to check the data ehich is coming from ui 
const {body} = require("express-validator");
const userController = require('../controllers/user.controller')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 character long')

], userController.registerUser)


module.exports = router;