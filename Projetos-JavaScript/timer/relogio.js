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
        let formato = `${hora}:${min}:${sec}`

        if (min < 10 && sec < 10) formato = `${hora}:0${min}:0${sec}`
        if (min < 10) formato = `${hora}:0${min}:${sec}`
        if (sec < 10) formato = `${hora}:${min}:0${sec}`

        return formato
    }
}

const relogio = new Relogio()