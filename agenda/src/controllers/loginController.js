const Login = require('../models/LoginModel')

module.exports.index = (req, res) => {
    if (req.session.user) return res.render('login-logado')
    return res.render('login')
}

module.exports.registro = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.registro()

        if (login.erros.length > 0) {
            req.session.save(() => {
                req.flash('erros', login.erros)
                return res.redirect('back')
            })

            return
        }

        req.session.save(() => {
            req.flash('sucesso', 'Seu usuário foi criado !!!')
            return res.redirect('back')
        })
    } catch (e) {
        console.log(e)
    }

}

module.exports.login = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.login()

        if (login.erros.length > 0) {
            req.session.save(() => {
                req.flash('erros', login.erros)
                return res.redirect('back')
            })
            return
        }

        req.session.save(() => {
            req.flash('sucesso', 'Seu login foi realizado com sucesso !!!')
            req.session.user = login.user
            return res.redirect('back')
        })
    } catch (e) {
        console.log(e)
    }

}

module.exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect('/')
}