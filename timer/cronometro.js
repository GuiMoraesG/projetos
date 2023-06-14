class Cronometro {
    constructor() {
        this.Cronometro = document.getElementById('#relogio')
        this.btns()
    }

    btns() {
        document.addEventListener('click', e => {
            const el = e.target

            if (el.className.contains('.iniciar')) {
                alert('ini')
            }
        })



    }

}

const crono = new Cronometro() 