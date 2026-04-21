const name = document.getElementById('input-box')
const startBtn = document.getElementById('btn')

startBtn.addEventListener('click', () => {
    localStorage.setItem('info',JSON.stringify({name:name.value}))
    window.location.href = '../game/index.html'
})