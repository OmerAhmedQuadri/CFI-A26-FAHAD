// let num = 5
// let factorial = 1
// for (let i = num; i > 0; i--) {
//     factorial = factorial * i

// }console.log(factorial);

function giveFactorial(num) {
    if (num < 0) {
        return 'enter a valid factorial'
    }
    let factorial = 1
    for (let i = num; i > 0; i--) {
        factorial = factorial * i
    }
    return factorial
}

console.log(giveFactorial(-1));