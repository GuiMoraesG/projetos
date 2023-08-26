exports.middlewareGlobal = (req, res, next) => {
    res.locals.erros = req.flash('erros')
    res.locals.sucesso = req.flash('sucesso')
    res.locals.user = req.session.user
    next()
}

exports.loginRequire = (req, res, next) => {
    if (!req.session.user) {
        req.flash('erros', 'Necessario fazer login !!!')
        req.session.save(() => res.redirect('/'))
        return
    }

    next()
}