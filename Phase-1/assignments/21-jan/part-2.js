// Question 1: Basic Post-Increment

let a = 5
console.log(a++)
console.log(a)
// Your Prediction:
// First output:5
// Second output:6

// Question 2: Basic Pre-Increment

let b = 5
console.log(++b)
console.log(b)
// Your Prediction:
// First output:6
// Second output:6

// Question 3: Basic Post-Decrement

let c = 10
console.log(c--)
console.log(c)
// Your Prediction:
// First output:10
// Second output:9

// Question 4: Basic Pre-Decrement

let d = 10
console.log(--d)
console.log(d)
// Your Prediction: 
// First output: 9
// Second output: 9

// Question 5: Post-Increment in Expression

// let x = 7
// let y = x++ + 5
console.log(y)
console.log(x)
// Your Prediction:
// y = 12
// x = 8

// Question 6: Pre-Increment in Expression

let x = 7
let y = ++x + 5
console.log(y)
console.log(x)
// Your Prediction:
// y = 13
// x = 8

// Question 7: Multiple Post-Increments

let num = 3
console.log(num++)
console.log(num++)
console.log(num++)
console.log(num)
// Your Prediction:
// First output: 3
// Second output: 4
// Third output: 5
// Fourth output: 6

// Question 8: Mixing Pre and Post Increment

// let a = 5
let result = a++ + ++a
console.log(result)
console.log(a)
// Your Prediction:
// result = 12
// a = 7

// Question 9: Decrement in Expression

let p = 20
let q = --p + p--
console.log(q)
console.log(p)
// Your Prediction:
// q = 38
// p = 18

// Question 10: Complex Expression

let m = 10
let n = m++ + m + ++m
console.log(n)
console.log(m)
// Your Prediction:
// n = 33
// m = 12
