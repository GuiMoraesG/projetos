function somarMultiplos() {
    const digito = document.querySelector("#digito").value;
    const resultado = document.querySelector("p#res");
    let total = 0;

    if (!digito) {
        alert("Por favor preencha todos os campos!");
        return;
    }

    for (let i = 0; i < digito; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            total += i;
            console.log(i, total);
        }
    }

    resultado.innerHTML = total;
}

document.addEventListener('keyup', e => {
    if (e.keyCode === 13) somarMultiplos();
})
