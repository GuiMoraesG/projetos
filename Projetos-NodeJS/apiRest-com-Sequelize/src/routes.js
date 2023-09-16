const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   return res.send('oi');
});

module.exports = router;