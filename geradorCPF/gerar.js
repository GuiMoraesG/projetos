import ValidarCpf from "./modulo/validarCPF"

class GerarCPF {
    constructor() {
        this.span = document.getElementById('cpfGerado')
        this.click()
    }

    click() {
        document.addEventListener('click', e => { if (e.target.tagName === 'BUTTON') this.criarCPF() })
    }

    criarCPF() {
        const cpfSemDigito = this.rand()
        const digito1 = ValidarCpf.calcularDigito(cpfSemDigito)
        const digito2 = ValidarCpf.calcularDigito(cpfSemDigito + digito1)
        const cpfFull = cpfSemDigito + digito1 + digito2
        
        this.span.innerHTML = cpfFull
    }

    rand(min = 10000000, max = 99999999) {
        return String(Math.floor(Math.random() * (max - min) + max))
    }
}

const gerar = new GerarCPF()