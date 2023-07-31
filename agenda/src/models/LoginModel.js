const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')


const LoginSchema = new mongoose.Schema({
    email: { type: String, require: true },
    senha: { type: String, require: true },
    data: { type: Date, default: Date.now({}) }
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login {
    constructor(body) {
        this.body = body
        this.erros = []
        this.user = null
    }

    async registro() {
        this.valida()
        if (this.erros.length > 0) return

        await this.jaFoiCadastrado()

        if (this.erros.length > 0) return

        const salt = bcrypt.genSaltSync()
        this.body.senha = bcrypt.hashSync(this.body.senha, salt)

        this.user = await LoginModel.create(this.body)
    }

    async jaFoiCadastrado() {
        this.user = await LoginModel.findOne({ email: this.body.email })

        if (this.user) this.erros.push('E-mail já cadastrado no nosso sistema !!!')
    }

    valida() {
        this.clean()

        if (!validator.isEmail(this.body.email)) this.erros.push('E-mail enválido !!!')
        if (this.body.senha.length < 3 || this.body.senha.length > 8) this.erros.push('Senha precisa ter entre 3 e 8 caracteres')
    }

    clean() {
        this.body = {
            email: this.body.email,
            senha: this.body.senha
        }
    }

    async login() {
        this.valida()
        if (this.erros.length > 0) return

        this.user = await LoginModel.findOne({ email: this.body.email })
        if (!this.user) {
            this.erros.push('E-mail ainda não foi registrado, por favor criar uma conta !!!')
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