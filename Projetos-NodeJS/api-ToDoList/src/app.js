const express = require('express');
const app = express();

const homeRouter = require('./routers/home');

app.use(homeRouter);

module.exports = app;
