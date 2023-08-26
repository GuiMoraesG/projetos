function contar() {
    var num = document.getElementById('num1')
    var N = Number(num.value)
    var Tab = document.getElementById('tab')



    if (num.value.length == 0) {
        alert(`Por favor, digite um número válido ${N}`)
    } else {
        Tab.innerHTML = ''
        for (var c = 0; c <= 10; c++) {
            var item = document.createElement('option')
            item.text += `${N} X ${c} = ${N * c} `

            Tab.appendChild(item)
        }
    }



}