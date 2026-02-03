// Q15. What will be the output?

function sum(a = 10, b = 20) {
    console.log('code before return statement')
    return a + b
    console.log('code after return statement')
}

console.log('code before function call')
console.log(sum(5))
console.log('code after function call')
// Your Prediction:
// code before function call
// code before return statement
// 25
// code after function call

// Question: Does the line after return execute? Why or why not?
// the line after return is always ignored


// Q16. What's the difference between these two functions?
// Function 1
function add1(a, b) {
    console.log(a + b)
}

// Function 2
function add2(a, b) {
    return a + b
}

let result1 = add1(10, 20)
let result2 = add2(10, 20)

console.log(result1)
console.log(result2)
// Your Prediction:

// result1 = 30

// result2 = 30

// Explanation:

// Q17. Create a function getMax that takes two numbers and returns the larger one.

function getMax(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

// Test it:

console.log(getMax(10, 20))  // Should print: 20
console.log(getMax(50, 30))  // Should print: 50


// Q18. What will be the output?
function multiply(a, b) {
    return a * b
}

let result = multiply(5, 4)
console.log(result)
console.log(multiply(10, 3))
// Your Prediction:
// 20
// 30


// Q19. Create a function calculateArea that takes length and width, and returns the area of a rectangle.

function calculateArea(a, b) {
    return a * b
}

// Test it:
let area = calculateArea(10, 5)
console.log('Area:', area)  // Should print: Area: 50


// Q20. What will be the output?
function checkAge(age) {
    if (age >= 18) {
        return 'Adult'
    } else {
        return 'Minor'
    }
}

console.log(checkAge(25))
console.log(checkAge(15))
// Your Prediction:
// Adult
// Minor


// Q21. Create a function isEven that takes a number and returns true if it's even, false if it's odd.

function isEven(a) {
    if (a % 2 == 0) {
        return true
    } else {
        return false
    }
}

// Test it:
console.log(isEven(10))  // true
console.log(isEven(7))   // false


// Q22. Create a function calculateGrade that takes marks and returns:
// "A" if marks >= 90
// "B" if marks >= 80
// "C" if marks >= 70
// "D" if marks >= 60
// "F" if marks < 60
// Your Code:

function calculateGrade(marks) {
    if (marks >= 90) {
        return "A"
    } else if (marks >= 80) {
        return 'B'
    } else if (marks >= 70) {
        return 'C'
    } else if (marks >= 60) {
        return 'D'
    } else if (marks < 60) {
        return 'fail'
    }
}

// Test it:

console.log(calculateGrade(95))  // A
console.log(calculateGrade(75))  // C
console.log(calculateGrade(55))  // F