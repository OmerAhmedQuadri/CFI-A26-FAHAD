const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const counter = document.getElementById("counter")

plusBtn.addEventListener('click', () => {
    doIt('+')
})
minusBtn.addEventListener('click', () => {
    doIt('-')
})

const doIt = (op) => {
    const num = Number(counter.innerText)
    if (op == '+') {
        counter.innerText = Number(counter.innerText) + 1
    }
    if (op == '-' && num != 0) {
        counter.innerText = Number(counter.innerText) - 1
    }
}