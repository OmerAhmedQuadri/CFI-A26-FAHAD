// Section 7: Ternary Operator

// Q52. Predict the output.

let marks4 = 90
marks4 >= 80 ? console.log('Passed') : console.log('Failed')
//PASSED


// Q53. Convert if...else to ternary.
let age6 = 20
let status
age6 >= 18 ? status = 'adult' : status = 'minor'
console.log(status);

// Q54. Predict the output.

let num7 = 7
let result = num7 % 2 === 0 ? 'Even' : 'Odd'
console.log(result) //ODD


// Q55. Create a ternary to check positive or negative.
let num1 = -5
let sign
num1 >= 0 ? 'Positive' : 'Negative'
console.log(sign)

// Q56. Predict the output.

let price4 = 1200
let discount3 = price4 >= 1000 ? 20 : 10
console.log(`Discount: ${discount3}%`)
//discount: 20%

// Q57. Create a ternary login check.
let username3 = 'admin'
let message
username3 === 'admin' ? 'Welcome Admin' : 'Welcome Guest'
console.log(message)

// Q58. Predict the output.

let marks5 = 85
let grade = marks5 >= 90 ? 'A' : marks5 >= 80 ? 'B' : marks5 >= 70 ? 'C' : 'F'
console.log(grade)
//B


// Q59. When should you avoid ternary operators?
// when conditions are complex or nested

// Q60. Convert if...else to ternary.
let score2 = 55
let result2 = score2 >= 50 ? 'Pass' : 'Fail'
console.log(result2)
