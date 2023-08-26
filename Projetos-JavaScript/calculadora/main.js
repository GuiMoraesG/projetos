class Calculadora {
    constructor() {
        this.display = document.querySelector('#display')
        this.eventos()
    }

    eventos() {
        document.addEventListener('click', e => {
            const el = e.target

            if (el.classList.contains('btn-num')) this.adicionarNum(el.textContent)
            if (el.classList.contains('btn-clear')) this.limparNums()
            if (el.classList.contains('btn-del')) this.delete()
            if (el.classList.contains('btn-eq')) {
                if (!this.display.value) return

                this.finalizarConta()
            }
        })
    }

    adicionarNum(num) { this.display.value += num }

    limparNums() { this.display.value = '' }

    delete() { this.display.value = this.display.value.slice(0, -1) }

    finalizarConta() {
        try {
            let conta = this.display.value
            const resolucao = eval(conta)

            this.display.value = resolucao
        } catch (e) {
            this.display.value = 'Conta inválida'
        }
    }
}

const calculadora = new Calculadora()