const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

router.post('/users', UserController.store);
router.get('/users', UserController.index);

router.post('/users/:user_id/address', AddressController.store);
router.get('/users/:user_id/address', AddressController.index);

module.exports = router;