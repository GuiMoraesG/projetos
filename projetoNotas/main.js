class CalculadoraMedia {
    constructor() {
        this.notaMaxima = Number(prompt('Digite qual deve ser a média para o aluno passar'))
        this.table = document.querySelector('.tabela')
        this.nomeAtividade = document.getElementById('nomeAtividade')
        this.notaAtividade = document.getElementById('notaAtividade')
        this.tdSituacao = document.querySelector('#tdSituacao')
        this.arrayNotas = []
        this.Validar()
    }

    Validar() {
        document.addEventListener('submit', (e) => {
            e.preventDefault()
            if (!this.notaMaxima) {
                this.notaMaxima = 6
                alert('Média do aluno para passar, terá valor o valor padrão de 6')
            }
            if (!this.nomeAtividade.value || !this.notaAtividade.value) { return alert('Por favor preencha os campos') }

            this.arrayNotas.push(Number(this.notaAtividade.value))
            this.medias()
            this.adicioarLinha()
        })
    }

    medias() {
        const spanNotaAtividade = document.querySelector('.spanNotaAtividade')
        const totNotas = this.arrayNotas.reduce((acumulador, valor) => { return acumulador + valor })
        const media = Math.floor(totNotas / this.arrayNotas.length)

        if (media >= this.notaMaxima) {
            this.tdSituacao.textContent = 'Aprovado'
            this.tdSituacao.setAttribute('class', 'aprovado')
        } else {
            this.tdSituacao.textContent = 'Reprovado'
            this.tdSituacao.setAttribute('class', 'reprovado')
        }

        return spanNotaAtividade.innerHTML = media
    }

    adicioarLinha() {
        const tr = document.createElement('tr')

        tr.innerHTML += `<td>${this.nomeAtividade.value}`
        tr.innerHTML += `<td>${this.notaAtividade.value}`
        tr.innerHTML += `<td>${this.situacao()}`
        this.table.appendChild(tr)
    }

    situacao() {
        return Number(this.notaAtividade.value) > this.notaMaxima ? 'A' : 'R'
    }

}

const calculadoraMedia = new CalculadoraMedia()
