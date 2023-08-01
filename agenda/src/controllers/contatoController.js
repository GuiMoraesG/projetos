const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    res.render('contato', { c: {} })
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
    req.session.save(() => res.redirect(`/contato/${contato.contato._id}`))
}

exports.editRegistro = async (req, res) => {
    const contato = new Contato()
    const c = await contato.buscaPorId(req.params.id)

    res.render('contato', { c })
}

exports.edit = async (req, res) => {
    const contato = new Contato(req.body)
    const c = await contato.editarContato(req.params.id)

    if (contato.erros.length > 0) {
        req.flash('erros', contato.erros)
        req.session.save(() => res.redirect('back'))
    }

    req.flash('sucesso', 'Seu contato foi editado com sucesso !!')
    req.session.save(() => res.redirect('back'))
}