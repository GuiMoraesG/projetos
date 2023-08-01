const mongoose = require('mongoose')

const ModelSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    sobrenome: { type: String, require: true },
    email: { type: String, default: '' },
    tell: { type: String, default: '' }
})

const ContatoModel = mongoose.model('Contato', ModelSchema)

class Contato {
    constructor(body) {
        this.body = body
        this.erros = []
        this.contato = null
    }

    async registro() {
        this.valida()
        if (this.erros.length > 0) return

        this.contato = await ContatoModel.create(this.body)
    }

    valida() {
        this.clean()

        if (!this.body.nome) this.erros.push('O campo "NOME" precisa ser preenchido !!!')
        if (!this.body.sobrenome) this.erros.push('O campo "SOBRENOME" precisa ser preenchido !!!')
        if (!this.body.email && !this.body.tell) this.erros.push('O campo "E-MAIL" ou o campo "TELEFONE" precisam estar preenchidos')
    }

    clean() {
        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            tell: this.body.tell
        }
    }

    async buscaPorId(id) {
        const cont = await ContatoModel.findById(id)

        return cont
    }

    async editarContato(id) {
        this.valida()
        if (this.erros.length > 0) return

        this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true })
    }

    async acharContatos() {
        const contatos = await ContatoModel.find()

        return contatos
    }
}

module.exports = Contato