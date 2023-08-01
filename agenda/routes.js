const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')
const logincontroller = require('./src/controllers/loginController')
const { loginRequire } = require('./src/middlewares/middleware')

//Home
route.get('/', homeController.paginaInicial)

//Login
route.get('/login', logincontroller.index)
route.post('/login/registro', logincontroller.registro)
route.post('/login/login', logincontroller.login)
route.get('/login/logout', logincontroller.logout)

//Contato
route.get('/contato', loginRequire, contatoController.index)
route.post('/contato/registro', loginRequire, contatoController.registro)

module.exports = route