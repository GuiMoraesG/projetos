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

    async registrar() {
        this.validar()
        this.clean()
        if (this.erros.length > 0) return

        await this.cadastrado()

        if (this.erros.length > 0) return

        const salt = bcrypt.genSaltSync()
        this.body.senha = bcrypt.hashSync(this.body.senha, salt)

        await LoginModel.create(this.body)
    }

    async cadastrado() {
        this.user = await LoginModel.findOne({ email: this.body.email })

        if (this.user) this.erros.push('Usuário já cadastrado em nosso site')
    }

    validar() {
        if (!validator.isEmail(this.body.email)) this.erros.push('E-mail inválido')
        if (!this.body.senha) this.erros.push('O campo Senha é obrigatorio')
        if (this.body.senha !== this.body.confirmacaoDeSenha) this.erros.push('O campo senha e repetir Senha precisam ser iguais')
        if (this.body.senha.length < 3 || this.body.senha.length > 8) this.erros.push('O campo senha precisa ter entre 3 e 8 caracters')
    }

    clean() {
        this.body = {
            email: this.body.email,
            senha: this.body.senha
        }
    }

    validarLogin() {
        this.clean()
        if (!validator.isEmail(this.body.email)) this.erros.push('E-mail inválido')
        if (!this.body.senha) this.erros.push('O campo Senha é obrigatorio')
    }

    async login() {
        this.validarLogin()
        if (this.erros.length > 0) return

        this.user = await LoginModel.findOne({ email: this.body.email })

        if (!this.user) {
            this.erros.push('Usuário ainda não foi cadastrado em nosso site')
            return
        }

        if (!bcrypt.compareSync(this.body.senha, this.user.senha)) {
            this.erros.push('Senha inválida')
            this.user = null
            return
        }
    }
}

module.exports = Login