const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login')
}

exports.registrar = (req, res) => {
    const login = new Login(req.body)
    login.registrar()

    if (login.erros.length > 0) {
        req.flash('erros', login.erros)
        req.session.save(() => res.redirect('back'))
        
        return
    }

    res.send(login.erros)
}