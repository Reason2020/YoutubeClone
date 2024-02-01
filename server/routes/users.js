const express = require('express');
const router = express.Router();
const { 
    addNewUser, 
    loginUser
} = require('../controllers/users');

router.post('/', addNewUser);
router.post('/login', loginUser);

module.exports = router;