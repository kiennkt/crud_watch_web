const express = require('express');
const router = express.Router();

const HomeController = require('../../app/controllers/HomeController');

router.get('/SignUp', HomeController.showSignUpUser);
router.post('/SignUp', HomeController.createAccountUser);
router.get('/SignIn', HomeController.showLoginUser);
router.post('/SignIn', HomeController.signInAccountUser);
router.get('/', HomeController.showHomeUser);

module.exports = router;
