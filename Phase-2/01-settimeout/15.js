console.log('Start');
let count = 5

const id = setInterval(() => {
    console.log(count--);
    if (!count) {
        clearInterval(id)
    }
}, 1000)

console.log(id);
console.log('the end');
