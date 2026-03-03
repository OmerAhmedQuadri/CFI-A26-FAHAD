// / Q No : 23
// // / Question: 23. Write a function that checks if a given number is a prime number.

function prime(num) {

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}
console.log(prime(7));

// // / Expected Output: <write expected output></write>
// true

let n = 1345
let isPrime = true

for (let i = 2; i < n; i++) {
    let count = 0
    if (n % i == 0) {
        count++
    }
    if(count>0){
        isPrime = false
        break;
    }
}
console.log(isPrime);