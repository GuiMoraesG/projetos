function contar() {
    var numIniciar = Number(document.getElementById('num1').value)
    var numFinal = Number(document.getElementById('num2').value)
    var numPasso = Number(document.getElementById('num3').value)
    var res = document.getElementById('res')

    res.innerHTML = 'O resultado é: '

    if (numIniciar == 0 || numFinal == 0 || numPasso == 0) {
        alert('Por favor, preencha todas as caixas !!')
    } else {
        if (numIniciar < numFinal) {
            for (var c = numIniciar; c <= numFinal; c += numPasso) {

                res.innerHTML += `${c}. `
            }
        } else {
            for (var c = numIniciar; c >= numFinal; c -= numPasso) {

                res.innerHTML += `${c}. `
            }
        }

    }
}