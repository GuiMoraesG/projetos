const express = require('express');
const router = express.Router();
const signUpControllers = require('./controllers/signUp');

router.get('/', signUpControllers.store);

module.exports = router;
