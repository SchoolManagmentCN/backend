const express = require('express');
const authController = require('../controller/authController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authenticate, authController.register);

module.exports = router;