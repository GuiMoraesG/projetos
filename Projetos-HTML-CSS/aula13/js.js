function comecar() {
    var agora = new Date()
    var agoraH = agora.getHours()
    var agoraM = agora.getMinutes()
    var agoraS = agora.getSeconds()
    var img = document.getElementById('imagem')
    var texto = document.getElementById('hora')


    texto.innerHTML = `Agora são exatamente ${agoraH}:${agoraM}:${agoraS} Horas `

    if (agoraH >= 0 && agoraH <= 11) {
        document.body.style.background = '#eb5766'

        img.style.background = '#eb5766'

    } else if (agoraH >= 12 && agoraH <= 17) {
        document.body.style.background = '#68abf2'

        img.src = 'imagens/icon2.png'
        img.style.background = '#68abf2'
    } else {
        document.body.style.background = '#b358e8'

        img.src = 'imagens/icon3.png'
        img.style.background = '#b358e8'
    }

}