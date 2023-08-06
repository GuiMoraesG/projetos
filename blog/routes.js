const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const postsController = require('./src/controllers/postsController')

// Home
route.get('/', homeController.index)

//Login
route.get('/login', loginController.index)
route.post('/login/registrar', loginController.registrar)
route.get('/login/logarUsuario', loginController.formularioLogar)
route.post('/login/login', loginController.login)

//Posts
route.get('/posts', postsController.index)
route.post('/posts/registrar', postsController.registrar)
route.get('/posts/:id', postsController.editIndex)
route.post('/posts/edit/:id', postsController.edit)

module.exports = route