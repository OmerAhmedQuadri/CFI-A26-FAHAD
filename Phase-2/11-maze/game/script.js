const gameTable = document.getElementById('game-table')
const scoreDisplay = document.getElementById('score')

const nameEl = document.getElementById('name')
const resetBtn = document.getElementById("reset-btn")

const homeBtn = document.getElementById('home-btn')

const clickAudio = new Audio('./assets/click.mp3')
const loseAudio = new Audio('./assets/lose.mp3')
const winAudio = new Audio('./assets/win.mp3')

homeBtn.addEventListener('click', () => {
    window.location.href = '../homepage'
})

resetBtn.addEventListener('click', () => {
    location.reload()
})

let localName = JSON.parse(localStorage.getItem('info'))
nameEl.innerText = localName.name

let scores = JSON.parse(localStorage.getItem("leaderboard")) || []

let numbers = []
let cells = []
let gameOver = false
let score = 100

const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
]


for (let i = 1; i <= 100; i++) {
    numbers.push(i)
}

numbers.sort(() => Math.random() - 0.5)


let index = 0
for (let i = 0; i < 10; i++) {
    let row = document.createElement('tr')

    for (let j = 0; j < 10; j++) {
        let cell = document.createElement('td')

        let value = numbers[index++]

        cell.setAttribute("data-num", value)

        cells.push(cell)
        row.append(cell)
    }

    gameTable.append(row)
}


function isPrime(n) {
    return primes.includes(n)
}

function reveal(cell) {
    clickAudio.play()
    cell.innerText = cell.getAttribute("data-num")
    cell.classList.add("revealed")
}

function showMultiples(value) {
    for (let i = 0; i < cells.length; i++) {
        let v = parseInt(cells[i].getAttribute("data-num"))
        if (v % value == 0) {
            reveal(cells[i])
        }
    }
}


function win(cell) {
    cell.classList.add("win")
    showMultiples(1)
    winAudio.play()
    gameOver = true
}

function lose(cell) {
    cell.classList.add("lose")
    showMultiples(1)
    loseAudio.play()
    gameOver = true
}


gameTable.addEventListener('click', function (e) {
    const cell = e.target

    if (gameOver || cell.classList.contains("revealed")) return

    if (score > 0) score--
    scoreDisplay.innerText = "Score: " + score

    const value = parseInt(cell.getAttribute("data-num"))

    reveal(cell)

    if (value == 1) {
        win(cell)
        return
    }

    if (isPrime(value)) {
        lose(cell)
        return
    }

    showMultiples(value)
})