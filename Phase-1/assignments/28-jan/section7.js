// Section 7: Sum and Count with Loops


// Q55. Create a program that calculates sum of numbers from 1 to 10
// Expected Output:
// Sum: 55
let sum1 = 0
let i1 = 1

while (i1 <= 10) {
    sum1 = sum1 + i
    i1++
}
console.log('Sum:', sum1)


// Q56. Predict the output
let sum = 0
let i = 1

while (i <= 5) {
    sum = sum + i
    console.log('i:', i, 'sum:', sum)
    i++
}
console.log('Total:', sum)
// i: 1 sum: 1
// i: 2 sum: 3
// i: 3 sum: 6
// i: 4 sum: 10
// i: 5 sum: 15
// Total: 15


// Q57. Create a program that calculates the sum of even numbers from 2 to 20
let sum2 = 0
let i2 = 2

while (i2 <= 20) {
    sum2 = sum2 + i2
    i2 += 2
}
console.log(sum2)


// Q58. Create a program that counts how many numbers from 1 to 100 are divisible by 7

let count = 0
let i3 = 7

while (i3 <= 100) {
    count = count + 1
    i3 = i3 + 7
}

console.log(count)


// Q59. Create a factorial calculator:
// - Ask user for a number
// - Calculate factorial (e.g., 5! = 5 × 4 × 3 × 2 × 1 = 120)
import readlineSync from 'readline-sync'

let num = readlineSync.questionInt('Enter number: ')
let factorial = 1

while (num > 0) {
    factorial = factorial * num
    num--
}
console.log(factorial)


// Q60. Create a program that calculates sum of odd numbers from 1 to 50
let sum4 = 0
let i4 = 1

while (i4 <= 50) {
    sum4 = sum4 + i4
    i4 += 2
}
console.log(sum4)


// Q61. Create a program that:
// - Asks user for a number
// - Counts how many digits it has
// Example: 12345 → 5 digits
let num5 = readlineSync.question('Enter number: ')
console.log(num.length)


// Q62. Create a program that calculates the sum of all multiples of 3 between 1 and 30
let sum6 = 0
let i6 = 3

while (i6 <= 30) {
    sum6 = sum6 + i6
    i6 = i6 + 3
}

console.log(sum6)