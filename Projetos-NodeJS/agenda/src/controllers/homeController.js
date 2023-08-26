const Contato = require('../models/ContatoModel')

exports.paginaInicial = async (req, res) => {
    const contato = new Contato()
    const c = await contato.acharContatos()
    res.render('index', { c })

    return
}