const mongoose = require('mongoose')
const PostsSchema = new mongoose.Schema({
    titulo: { type: String, require: true },
    categoria: { type: String, require: true },
    conteudo: { type: String, require: true },
    Data: { type: Date, default: Date.now }
})

const PostsModel = mongoose.model('Posts', PostsSchema)

class Posts {
    constructor(body) {
        this.body = body
        this.erros = []
        this.postsControl = null
    }

    async registrar() {
        this.validar()
        if (this.erros.length > 0) return

        this.postsControl = await PostsModel.create(this.body)
    }

    validar() {
        if (!this.body.titulo) this.erros.push('O campo TÍTULO é obrigatório')
        if (!this.body.conteudo) this.erros.push('O campo CONTEUDO é obrigatório')
    }

    async editIndex(id) {
        const posts = await PostsModel.findById(id)

        return posts
    }

    async edit(id) {
        this.validar()
        if (this.erros.length > 0) return

        await PostsModel.findByIdAndUpdate(id, this.body, { new: true })
    }

    async procurarPosts() {
        const posts = await PostsModel.find().sort({ Data: -1 })

        return posts
    }
}

module.exports = Posts