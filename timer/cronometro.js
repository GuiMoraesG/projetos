class Cronometro {
    constructor() {
        this.segundos = 0
        this.timer
        this.Cronometro = document.getElementById('relogio')
        this.btns()
    }

    btns() {
        document.addEventListener('click', e => {
            const el = e.target

            if (el.classList.contains('iniciar')) this.iniciar()
            if (el.classList.contains('parar')) this.parar()
            if (el.classList.contains('zerar')) this.zerar()
        })
    }

    iniciar() {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            this.segundos++
            this.Cronometro.innerHTML = this.numeroFormatado(this.segundos)
        }, 1000)

        if (this.Cronometro.classList.contains('parado')) this.Cronometro.classList.remove('parado')
    }

    parar() {
        clearInterval(this.timer)

        if (!this.Cronometro.classList.contains('parado')) this.Cronometro.setAttribute('class', 'parado')
    }

    zerar() {
        clearInterval(this.timer)
        this.segundos = 0
        this.Cronometro.innerHTML = '00:00:00'
        if (this.Cronometro.classList.contains('parado')) this.Cronometro.classList.remove('parado')
    }

    numeroFormatado(segundos) {
        const data = new Date(segundos * 1000)

        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
}

const crono = new Cronometro() 