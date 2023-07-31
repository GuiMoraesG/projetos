exports.middlewareGlobal = (req, res, next) => {
    res.locals.erros = req.flash('erros')
    res.locals.sucesso = req.flash('sucesso')
    next()
}