const express = require('express');
const router = express.Router();

const taskController = require('../controllers/Tasks');

router.get('/tasks', taskController.index);
router.post('/tasks', taskController.store);

module.exports = router;