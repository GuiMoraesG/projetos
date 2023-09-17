const express = require('express');
const app = express();
const router = require('./routes');

require('../src/database');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(3333, () => {
    console.log('http://localhost:3333');
});
