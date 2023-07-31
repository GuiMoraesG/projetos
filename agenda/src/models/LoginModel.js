const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')


const LoginSchema = new mongoose.Schema({
    email: { type: String, require: true },
    senha: {type: String, require: true},
    data: {type: Date, default: Date.now()}
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login {
    constructor(body) {
        this.body = body
        this.erros = []
        this.user = null
    }

    registro() {
        this.valida()

    }

    valida() {
        this.clean()

    }

    clean() {
        this.body = {
            email: this.body.email,
            senha: this.body.senha
        }
    }
}

module.exports = Login