const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const router = require('./src/routes');

app.use(express.json());
app.use(router);

app.listen(process.env.URL, () => { console.log('http://localhost:8080'); });
