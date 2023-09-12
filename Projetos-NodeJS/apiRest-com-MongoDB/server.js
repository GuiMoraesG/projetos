require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONMONGOOSE).then(() => app.emit('done')).catch((e) => console.log(e));

const homeRouter = require('./src/routes/home');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(homeRouter);

app.on('done', () => {
    app.listen(3001, () => {
        console.log('Conectado ' + 'http://localhost:3001')
    });
});
