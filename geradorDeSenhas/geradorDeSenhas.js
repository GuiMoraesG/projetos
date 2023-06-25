class CriarSenha {
    constructor() {
        this.qtdeChar = document.getElementById('qtdeChar')
        this.addMaiuscula = document.getElementById('addMaiusculas')
        this.addMinusculas = document.getElementById('addMinusculas')
        this.addNumber = document.getElementById('addNumber')
        this.addSim = document.getElementById('addSim')
        this.res = document.querySelector('#res')

        this.pegarEvento()
    }

    pegarEvento() {
        document.addEventListener('click', e => {
            const el = e.target
            if (el.classList.contains('btn')) this.listaDePossibilidades()
        })
    }

    listaDePossibilidades() {
        const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
        const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
        const geraMinusculas = () => String.fromCharCode(rand(97, 123))
        const geraNum = () => String.fromCharCode(rand(48, 58))
        const simbolos = ',.;^~[]{}!@#$%&*=-+()_'
        const geraSimbolos = () => simbolos[rand(0, simbolos.length)]
        const senhaRandom = []

        for (let i = 0; i < this.qtdeChar.value; i++) {
            this.addMaiuscula.checked && senhaRandom.push(geraMaiuscula())
            this.addMinusculas.checked && senhaRandom.push(geraMinusculas())
            this.addNumber.checked && senhaRandom.push(geraNum())
            this.addSim.checked && senhaRandom.push(geraSimbolos())
        }

        return this.res.innerHTML = senhaRandom.join('').slice(0, this.qtdeChar.value) || 'Campos não preenchidos'
    }
}

const criarSenha = new CriarSenha()