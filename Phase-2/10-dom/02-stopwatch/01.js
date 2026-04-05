const HOURS_DISPLAY = document.getElementById('hours')
const MINUTES_DISPLAY = document.getElementById('minutes')
const SECONDS_DISPLAY = document.getElementById('seconds')

const START_STOP_BTN = document.getElementById('start-stop-btn')
const RESET_BTN = document.getElementById('reset-btn')

let timer
let hours = 24
let minutes = 0
let seconds = 0

function initialTime() {
    const time = JSON.parse(localStorage.getItem('time'))
    if (time) {
        hours = time.hours
        minutes = time.minutes
        seconds = time.seconds
    }
    HOURS_DISPLAY.innerText = String(hours).padStart(2, '0')
    MINUTES_DISPLAY.innerText = String(minutes).padStart(2, '0')
    SECONDS_DISPLAY.innerText = String(seconds).padStart(2, '0')
}
initialTime()


const updateTime = () => {
    seconds++
    if (seconds == 60) {
        seconds = 0
        minutes++
    }
    if (minutes == 60) {
        minutes = 0
        hours++
    }
    if (hours == 24) {
        reset()
    }
    HOURS_DISPLAY.innerText = String(hours).padStart(2, '0')
    MINUTES_DISPLAY.innerText = String(minutes).padStart(2, '0')
    SECONDS_DISPLAY.innerText = String(seconds).padStart(2, '0')
}

const start = () => {
    START_STOP_BTN.innerText = 'Stop'
    START_STOP_BTN.addEventListener('click', stop)
    START_STOP_BTN.removeEventListener('click', start)

    timer = setInterval(updateTime, 1000)
}


const stop = () => {
    START_STOP_BTN.innerText = 'Start'
    START_STOP_BTN.addEventListener('click', start)
    START_STOP_BTN.removeEventListener('click', stop)
    localStorage.setItem('time', JSON.stringify({hours, minutes, seconds}))
    clearInterval(timer)
}

const reset = () => {
    START_STOP_BTN.innerText = 'Start'
    START_STOP_BTN.addEventListener('click', start)
    START_STOP_BTN.removeEventListener('click', stop)
    clearInterval(timer)
    hours = 0
    minutes = 0
    seconds = 0
    
    HOURS_DISPLAY.innerText = String(hours).padStart(2, '0')
    MINUTES_DISPLAY.innerText = String(minutes).padStart(2, '0')
    SECONDS_DISPLAY.innerText = String(seconds).padStart(2, '0')
    localStorage.setItem('time', JSON.stringify({hours, minutes, seconds}))

}

START_STOP_BTN.addEventListener('click', start)
RESET_BTN.addEventListener('click', reset)