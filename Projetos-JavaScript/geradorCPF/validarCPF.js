class ValidarCpf {
    etapaDeValidacao() {
        if (this.cpf.length !== 11) return false
        if (this.cpf === 'undefined') return false
        if (this.isSequencia()) return false

        const cpfValido = this.validaCPF()

        return cpfValido
    }

    validaCPF() {
        const cpfSemDigitos = this.cpf.slice(0, -2)
        const digito1 = ValidarCpf.calcularDigito(cpfSemDigitos)
        const digito2 = ValidarCpf.calcularDigito(cpfSemDigitos + digito1)
        const novoCPF = cpfSemDigitos + digito1 + digito2

        return novoCPF === this.cpf
    }

    static calcularDigito(cpf) {
        const cpfArray = Array.from(cpf)
        let regressiva = cpfArray.length + 1

        const total = cpfArray.reduce((acumulador, valor) => {
            acumulador += (regressiva * Number(valor))
            regressiva--

            return acumulador
        }, 0)

        const digito = 11 - (total % 11)

        return digito > 9 ? '0' : String(digito)
    }

    isSequencia() {
        const repete = this.cpf[0].repeat(this.cpf.length)

        return repete === this.cpf
    }
}