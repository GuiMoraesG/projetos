class Form {
    constructor() {
        this.formulario = document.getElementById('forms')
        this.pegarEvento()
    }

    pegarEvento() {
        this.formulario.addEventListener('submit', e => { this.validarForm(e) })
    }

    camposValidos() {
        let flag = true

        for (let ex of this.formulario.querySelectorAll('.erro')) { ex.remove() }

        for (let campos of this.formulario.querySelectorAll('.validar')) {
            let label = campos.previousElementSibling.innerHTML

            if (!campos.value) {
                this.erroText(campos, `Preencha o campos ${label.replace(':', ' ')}`)
                flag = false
            }

            if (campos.classList.contains('cpf')) {
                if (!this.validaCPF(campos)) flag = false
            }

            if (campos.classList.contains('user')) {
                if (!this.validarUser(campos)) flag = false
            }
        }

        return flag
    }

    validarUser(campo) {
        let user = campo.value

        if (user.length < 3 || user.length > 10) {
            this.erroText(campo, 'O nome de usuário tem que ter entre 3 e 10 caracteres')
            return false
        }

        return true
    }

    validaCPF(campo) {
        const cpf = new ValidarCpf(campo.value)

        if (!cpf.validaCPF()) {
            this.erroText(campo, 'CPF Inválido')
            return false
        }

        return true
    }

    validarSenhas() {
        let flag = true
        const pass = document.getElementById('pass')
        const repetirPass = document.getElementById('repetirPass')

        if (pass.value.length < 3 || pass.value.length > 10) {
            this.erroText(pass, 'A senha precisa conter entre 3 e 10 caracteres')
            flag = false
        }

        if (pass.value !== repetirPass.value) {
            this.erroText(repetirPass, 'Senhas diferentes')
            flag = false
        }

        return flag
    }

    erroText(campo, msg) {
        const p = document.createElement('p')
        p.innerHTML = msg
        p.setAttribute('class', 'erro')
        campo.insertAdjacentElement('afterend', p)
    }

    validarForm(e) {
        e.preventDefault()
        const camposValidados = this.camposValidos()
        const senhasValidadas = this.validarSenhas()

        if (camposValidados && senhasValidadas) {
            this.formulario.submit()
        }
    }
}

const formulario = new Form()