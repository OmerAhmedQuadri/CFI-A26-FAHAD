// Section 2: Function Expressions (6 Questions)
// Q9. What will be the output?

let printNumbers = function (max) {
    for (let i = 1; i <= max; i++) {
        console.log(i)
    }
}

printNumbers(10)
// Your Prediction:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Q10. Convert this function declaration to a function expression:

// function greet(name) {
//     console.log('Hello ' + name)
// }
// // Your Code:
let greet = function (name) {
    console.log(('Hello ' + name));
}
greet("fahad")

// Q11. What's the difference between these two?
// Version 1
// function add(a, b) {
//     console.log(a + b)
// }

// // Version 2
// let add = function (a, b) {
//     console.log(a + b)
// }
// Your Answer:
// one is declaration and one is expression

// Q12. Create a function expression called printEven that prints all even numbers from 1 to a given maximum.
function printEven(n) {
    for (let i = 0; i <= n; i += 2) {
        console.log(i);
    }
}

// Test it:
printEven(20)  // Should print: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// Q13. What will be the output?
let calculate = function (a, b) {
    console.log('Sum:', a + b)
    console.log('Product:', a * b)
}

calculate(5, 3)
// Your Prediction:
// Sum: 8
// Product: 15

// Q14. Create a function expression printPattern that takes a number and prints a star pattern:
// If input is 4:
// *
// * *
// * * *
// * * * *
// Your Code:
function printPattern(n) {
    let str = ''
    for (let i = 0; i < n; i++) {
        str = str + '* '
        console.log(str);
    }
}
printPattern(4)


