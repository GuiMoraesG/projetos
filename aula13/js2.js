function clicou() {
    var anocliente = document.getElementById('ano')
    var ano = new Date()
    var anoAtual = ano.getFullYear()
    var idade = anoAtual - Number(anocliente.value)
    var texto = document.getElementById('calculo')
    var imagem = document.getElementById('imagem')

    var sexIdentificadorMasc = document.getElementById('masc')
    var sexIdentificadorFem = document.getElementById('fem')

    if (sexIdentificadorMasc.checked == true) {
        texto.innerHTML = `Detectamos um Homem com ${idade} anos `

        if(idade > 0 && idade <= 12) {
            imagem.src = 'imagens/icon1.png'
        } else if(idade > 13 && idade <= 35) {
            imagem.src = 'imagens/icon2.png'
        }
    } else {
        texto.innerHTML = `Detectamos uma Mulher com ${idade} anos `
    }
}