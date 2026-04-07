const inputBox = document.getElementById('input')
const btn = document.getElementById('button')

btn.addEventListener('click', toggle)

function toggle() {
    if (btn.innerText == "show") {
        inputBox.setAttribute('type', 'text')
        btn.innerText = 'hide'
    } else if (btn.innerText == "hide") {
        inputBox.setAttribute('type', 'password')
        btn.innerText = 'show'
    }
}


