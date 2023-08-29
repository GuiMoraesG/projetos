const keys = document.querySelectorAll('.key')

function playNotes(event) {
    let audioKeyCode = getKeyCode(event)
    const key = document.querySelector(`[data-key="${audioKeyCode}"]`)
    console.log(key)
}

function getKeyCode(event) {
    let keyCode;
    const isKeyboard = event.type === 'keydown'

    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}

keys.forEach(key => {
    key.addEventListener('click', playNotes)
})

window.addEventListener('keydown', playNotes)