const Login = require('../models/LoginModel')

module.exports.index = (req, res) => {
    res.render('login')
}

module.exports.registro = (req, res) => {
    const login = new Login(req.body)
    login.registro()







    res.send(req.body)
}