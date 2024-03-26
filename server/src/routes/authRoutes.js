const express = require('express');
const router = express.Router();

// Import controllers
const authController = require('../controllers/authController');

// Define authentication routes
router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout', authController.logout);

module.exports = router;
