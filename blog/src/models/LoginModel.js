const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const LoginSchema = new mongoose.Schema({
    email: { type: String, require: true },
    senha: { type: String, require: true }
})

const LoginModel = mongoose.model('LoginBlog', LoginSchema)

class Login {
    constructor(body) {
        this.body = body
        this.erros = []
        this.user = null
    }

    registrar() {
        this.validar()
        this.clean()
        if (this.erros.length > 0) return

    }

    validar() {
        if (!validator.isEmail(this.body.email)) this.erros.push('E-mail inválido')
        if (!this.body.senha) this.erros.push('O campo Senha é obrigatorio')
        if (this.body.senha !== this.body.confirmacaoDeSenha) this.erros.push('O campo senha e repetir Senha precisam ser iguais ')
    }

    clean() {
        this.body = {
            email: this.body.email,
            senha: this.body.senha,
        }
    }
}

module.exports = Login