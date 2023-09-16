const express = require('express');
const router = express.Router();

const taskController = require('../controllers/Tasks');

router.get('/tasks', taskController.index);
router.post('/tasks', taskController.store);

router.delete('/tasks/:id', taskController.delete);

module.exports = router;