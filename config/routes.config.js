const express = require('express');
const passport = require('passport');
const GOOGLE_SCOPES = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']

const router = express.Router();
const usersController = require('../controllers/users.controller');
const secure = require('../middlewares/secure.middleware');

router.get('/register', usersController.register);
router.post('/register', usersController.doRegister);

// Iteration 2: login routes
router.get('/login', usersController.login);
router.post('/login', usersController.doLogin);

// Iteration 2: logout route
router.post('/logout', usersController.logout)
// Iteration 3: authenticate users path
router.get('/users', secure.isAuthenticated, usersController.list);

router.get('/', (req, res) => res.redirect('/users'));

module.exports = router;
