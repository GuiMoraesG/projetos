class Relogio {
    constructor() {
        this.relogio = document.querySelector('h1')
        this.atualizar()
    }

    atualizar() {
        setInterval(() => { this.relogio.innerHTML = this.pegarHoras() }, 1000)
    }

    pegarHoras() {
        let data = new Date()
        let hora = data.getHours()
        let min = data.getMinutes()
        let sec = data.getSeconds()

        return `${hora}:${min}:${sec}`
    }
}

const relogio = new Relogio()