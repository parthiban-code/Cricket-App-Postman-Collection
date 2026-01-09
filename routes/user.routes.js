const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/user.controller');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
// This code defines the user routes for registration and login.
// It imports the necessary modules, sets up the router, and defines the routes for user registration   