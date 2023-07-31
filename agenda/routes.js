const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')
const logincontroller = require('./src/controllers/loginController')

//Home
route.get('/', homeController.paginaInicial)

//Login
route.get('/login', logincontroller.index)
route.post('/login/registro', logincontroller.registro)


module.exports = route