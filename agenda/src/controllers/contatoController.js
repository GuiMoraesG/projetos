const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    res.render('contato')
}

exports.registro = async (req, res) => {
    const contato = new Contato(req.body)
    await contato.registro()

    if (contato.erros.length > 0) {
        req.flash('erros', contato.erros)
        req.session.save(() => res.redirect('back'))
        return
    }

    req.flash('sucesso', 'Seu contato foi registrado com sucesso !!!')
    req.session.save(() => res.redirect('back'))
}