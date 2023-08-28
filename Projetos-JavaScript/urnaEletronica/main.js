class Urna {
    constructor() {
        this.titulo = document.querySelector('.titulo')
        this.fotoPresidente = document.querySelector('.fotoPresidente')
        this.fotoVicePresidente = document.querySelector('.fotoVicePresidente')
        this.auxilio = document.querySelector('.auxilio')
        this.infoPresidente = document.querySelector('.infoPresidente')
        this.digito1 = document.querySelector('.digito1')
        this.digito2 = document.querySelector('.digito2')
        this.etapaAtual = 0
        this.branco = false

        this.btnUrnas()
    }

    btnUrnas() {
        document.addEventListener('click', e => {
            const el = e.target

            if (el.classList.contains('btn-num')) return this.incrementarDigitos(el.innerText)
            if (el.classList.contains('btn-votarBranco')) return this.votoEmBranco()
            if (el.classList.contains('btn-corrige')) return this.corrige()
            if (el.classList.contains('btn-confirma')) return this.confirma()
        })
    }

    incrementarDigitos(valor) {
        if (!this.digito1.value) {
            this.digito1.removeAttribute('class', 'pisca')
            this.digito2.setAttribute('class', 'pisca')

            return this.digito1.value = valor
        }

        if (!this.digito2.value) this.digito2.removeAttribute('class', 'pisca')

        this.digito2.value = valor
        const numeroCandidato = this.digito1.value + this.digito2.value

        return this.dadosCandidato(numeroCandidato)
    }

    dadosCandidato(numeroCandidato) {
        for (let i in etapas) {
            if (etapas[this.etapaAtual].candidatos[i].numero === numeroCandidato) {
                const nomeCandidato = document.querySelector('.nomeCandidato')
                const partidoCandidato = document.querySelector('.partidoCandidato')

                nomeCandidato.innerText = etapas[this.etapaAtual].candidatos[i].nome
                partidoCandidato.innerText = etapas[this.etapaAtual].candidatos[i].partido
                this.fotoPresidente.style.background = etapas[this.etapaAtual].candidatos[i].fotos[0].cor
                this.titulo.innerText = etapas[this.etapaAtual].titulo

                this.telaUrna()
                return
            }
        }

        return this.votoEmBranco()
    }

    confirma() {
        if (this.branco) {
            alert('Você votou em BRANCO')
            this.msgdeFim()
            return
        }

        if (!this.digito1.value || !this.digito2) { return alert('Digite os valores abaixo') }

        if (this.etapaAtual !== 1) {
            alert('Você já realizou seu primeiro voto !')
            this.corrige()
            this.etapaAtual = 1
            return
        }

        if (this.etapaAtual === 1) {
            alert('Votação encerrada !')
            this.etapaAtual = 0
            this.msgdeFim()
            return
        }
        alert('oi')
    }

    corrige() {
        this.digito1.value = ''
        this.digito2.value = ''
    }

    votoEmBranco() {
        this.semTelaUrna()

        this.digito1.style.display = 'none'
        this.digito2.style.display = 'none'
        this.titulo.style.display = 'block'
        this.titulo.style.display = 'block'
        this.titulo.innerText = 'VOTO EM BRACO'
        this.branco = true

    }

    semTelaUrna() {
        this.titulo.style.display = 'none'
        this.fotoPresidente.style.display = 'none'
        this.auxilio.style.display = 'none'
        this.infoPresidente.style.display = 'none'
    }

    telaUrna() {
        this.titulo.style.display = 'block'
        this.fotoPresidente.style.display = 'block'
        this.auxilio.style.display = 'block'
        this.infoPresidente.style.display = 'block'
    }

    msgdeFim() {
        this.semTelaUrna()
        this.digito1.style.display = 'none'
        this.digito2.style.display = 'none'

        const msgVoto = document.querySelector('.msgVoto')
        msgVoto.innerText = 'FIM!'
        this.titulo.style.display = 'none'
        msgVoto.setAttribute('class', 'fim')
    }
}

const urna = new Urna()