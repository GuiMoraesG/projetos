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
    req.session.save(() => res.redirect(`/posts/${posts.postsControl._id}`))
}

exports.editIndex = async (req, res) => {
    const p = new Posts()
    const post = await p.editIndex(req.params.id)

    res.render('posts', { post })
}

exports.edit = async (req, res) => {
    const posts = new Posts(req.body)
    await posts.edit(req.params.id)

    req.flash('sucesso', 'Esse Post foi editado com sucesso!!')
    req.session.save(() => res.redirect('back'))
}