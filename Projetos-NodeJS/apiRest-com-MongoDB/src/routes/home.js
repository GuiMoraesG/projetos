const express = require('express');
const router = express.Router();
const homeController = require('../controllers/Home');

router.post('/', homeController.store);
router.get('/', homeController.index);

router.get('/:id', homeController.show);
router.put('/:id', homeController.update);
router.delete('/:id', homeController.delete);

module.exports = router;
