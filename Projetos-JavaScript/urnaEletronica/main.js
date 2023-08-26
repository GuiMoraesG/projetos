class Urna {
    constructor() {
        this.titulo = document.querySelector('.titulo')
        this.fotoPresidente = document.querySelector('.fotoPresidente')
        this.fotoVicePresidente = document.querySelector('.fotoVicePresidente')
        this.auxilio = document.querySelector('.auxilio')
        this.infoPresidente = document.querySelector('.infoPresidente')
        this.digito1 = document.querySelector('.digito1')
        this.digito2 = document.querySelector('.digito2')

        this.btnUrnas()
    }

    btnUrnas() {
        document.addEventListener('click', e => {
            const el = e.target

            if (el.classList.contains('btn-num')) {
                this.incrementarDigitos(el.innerText)
            }
        })
    }

    incrementarDigitos(valor) {
        this.digito1.value = valor


        this.telaUrna()
    }

    telaUrna() {
        this.titulo.style.display = 'block'
        this.fotoPresidente.style.display = 'block'
        this.fotoVicePresidente.style.display = 'block'
        this.auxilio.style.display = 'block'
        this.infoPresidente.style.display = 'block'
    }
}

const urna = new Urna()