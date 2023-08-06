const Posts = require('../models/PostsModel')

module.exports.index = async (req, res) => {
    const p = new Posts()
    const post = await p.procurarPosts()

    res.render('index', { post })
}