class Lista {
    constructor() {
        this.item = document.querySelector('#item')
        this.ul = document.querySelector('.tagLista')
        this.btn = document.querySelector('button')
        this.iniciar()
        this.adicionarTarefasSalvas()
    }

    iniciar() {
        this.btn.addEventListener('click', () => {
            if (this.item.value === '') { return }

            this.criarLi(this.item.value)

            this.item.value = ''
            this.item.focus()
            this.salvarTarefas()
        })

        document.addEventListener('click', e => {
            const el = e.target
            if (el.classList.contains('remover')) {
                el.parentElement.remove()
                this.salvarTarefas()
            }
        })
    }

    criarLi(item) {
        let li = document.createElement('li')
        li.innerHTML = item + ' '
        this.ul.appendChild(li)

        let criaBtn = this.criarBtn()
        li.appendChild(criaBtn)
    }

    criarBtn() {
        let btn = document.createElement('button')

        btn.setAttribute('class', 'remover')
        btn.textContent = 'Remover'

        return btn
    }

    salvarTarefas() {
        const liTarefas = this.ul.querySelectorAll('li')
        const listaDeTarefas = []

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText
            tarefaTexto = tarefaTexto.replace('Remover', '').trim()

            listaDeTarefas.push(tarefaTexto)
        }

        const tarefasJSON = JSON.stringify(listaDeTarefas)
        localStorage.setItem('tarefas', tarefasJSON)
    }

    adicionarTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas')
        const converterTarefas = JSON.parse(tarefas)

        for (let t of converterTarefas) {
            this.criarLi(t)
        }
    }
}

const lista = new Lista()