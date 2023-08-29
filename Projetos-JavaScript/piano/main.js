const keys = document.querySelectorAll('.key')

function playNotes(event) {
    let keyCode;
    const isKeyboard = event.type === 'keydown'

    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    console.log(event.type)
    console.log(keyCode)
}

keys.forEach(key => {
    key.addEventListener('click', playNotes)
})

window.addEventListener('keydown', playNotes)