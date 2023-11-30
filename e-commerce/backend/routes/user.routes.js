const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Register a new user
router.post('/register', UserController.registerUser);

// Implement other user routes as needed

module.exports = router;
