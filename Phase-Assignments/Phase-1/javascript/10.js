// / Q No : 10
// / Question: 10. Write a function that finds the factorial of a number using:
// ➔ Recursion
// ➔ For loop

let n = 5

function recursivefact(n) {
    if (n == 0) {
        return 1
    }
    return n * recursivefact(--n)
}
console.log(recursivefact(n));


function factorial(n) {
    let fact = 1
    for (let i = n; i > 0; i--) {
        fact = fact * i
    }
    return fact
}
console.log(factorial(n));




// / Expected Output: <write expected output></write>
