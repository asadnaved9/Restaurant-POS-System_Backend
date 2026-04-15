const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/userController');


// Authentication Routes
router.post('/register').post(register);
router.post('/login').post(login);

module.exports = router;