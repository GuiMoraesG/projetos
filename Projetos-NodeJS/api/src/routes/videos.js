const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videos');

router.get('/videos', videosController.index);
router.post('/videos', videosController.store);

router.get('/videos/:id', videosController.show);
router.put('/videos/:id', videosController.update);
router.delete('/videos/:id', videosController.delete);

module.exports = router;
