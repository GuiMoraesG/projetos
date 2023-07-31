const Login = require('../models/LoginModel')

module.exports.index = (req, res) => {
    res.render('login')
}

module.exports.registro = async (req, res) => {
    const login = new Login(req.body)
    await login.registro()

    if (login.erros.length > 0) {
        req.session.save(() => {
            return res.redirect('back')
        })

        return
    }

    req.session.save(() => {
        return res.redirect('back')
    })
}