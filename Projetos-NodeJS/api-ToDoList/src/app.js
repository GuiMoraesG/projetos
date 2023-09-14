const express = require('express');
const app = express();

const taskRouter = require('./routers/task');

app.use(express.json());
app.use(taskRouter);

module.exports = app;
