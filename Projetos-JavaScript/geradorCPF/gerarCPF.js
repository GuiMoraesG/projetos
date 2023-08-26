class GerarCPF {
    capturarEventos() {
        document.addEventListener('click', e => {
            const el = e.target
            if (el.tagName === 'BUTTON') this.criarCPFValido()
        })
    }

    rand(min = 10000000, max = 99999999) {
        return String(Math.floor(Math.random() * (max - min) + max))
    }

    cpfFormatado(cpf) {
        return cpf.slice(0, 3) + '.'
            + cpf.slice(3, 6) + '.'
            + cpf.slice(6, 9) + '-'
            + cpf.slice(9, 11)
    }

    criarCPFValido() {
        const validaCpf = new ValidarCpf()
        const span = document.querySelector('#cpf')
        const cpfSemDigitos = this.rand()
        const digito1 = ValidarCpf.calcularDigito(cpfSemDigitos)
        const digito2 = ValidarCpf.calcularDigito(cpfSemDigitos + digito1)
        const cpf = cpfSemDigitos + digito1 + digito2

        span.innerHTML = this.cpfFormatado(cpf)
    }
}

const gerar = new GerarCPF()
gerar.capturarEventos()