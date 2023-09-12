const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

require('./src/database');

const homeRouter = require('./src/routes/home');
const videosRouter = require('./src/routes/videos');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(homeRouter);
app.use(videosRouter);

app.listen(3001, () => {
    console.log('http://localhost:3001')
});
