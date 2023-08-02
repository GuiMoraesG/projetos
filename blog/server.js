require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTSTRING).then(() => app.emit('pronto')).catch(e => console.log(e))
const route = require('./routes')











app.use(route)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executado na porata 3000')
    })
})
