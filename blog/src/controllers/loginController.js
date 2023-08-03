const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login')
}

exports.registrar = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.registrar()

        if (login.erros.length > 0) {
            req.flash('erros', login.erros)
            req.session.save(() => res.redirect('back'))

            return
        }

        req.flash('sucesso', 'Sua conta foi criada com sucesso !!')
        req.session.save(() => res.redirect('back'))

    } catch (e) {
        console.log(e)
    }
}

exports.formularioLogar = (req, res) => {
    res.render('formularioLogar')
}

exports.login = async (req, res) => {
    const login = new Login(req.body)
    await login.login()

    if (login.erros.length > 0) {
        req.flash('erros', login.erros)
        req.session.save(() => res.redirect('back'))
        return
    }

    req.flash('sucesso', 'Você entrou em nosso sistema !!!')
    req.session.user = login.user
    req.session.save(() => res.redirect('/'))
}