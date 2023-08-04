const Posts = require('../models/PostsModel')

exports.index = (req, res) => {
    res.render('posts', { post: {} })
}

exports.registrar = async (req, res) => {
    const posts = new Posts(req.body)
    await posts.registrar()

    if (posts.erros.length > 0) {
        req.flash('erros', posts.erros)
        req.session.save(() => res.redirect('back'))
        return
    }

    req.flash('sucesso', 'Seu Post foi salvo com sucesso!')
    req.session.save(() => res.redirect('back'))
}