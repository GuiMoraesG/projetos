const express = require('express');
const app = express();
const router = require('./routes');

app.use(router);
app.use(express.json());

app.listen(3333, () => {
    console.log('http://localhost:3333');
});