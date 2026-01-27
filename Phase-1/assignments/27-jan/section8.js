// Section 8: Mixed Challenges


// Q61. Create a calculator using switch.
let num8 = 10
let num9 = 5
let operator = '+'

switch (operator) {
    case '+':
        console.log(num1 + num3)
        break
    case '-':
        console.log(num1 - num3)
        break
    case '*':
        console.log(num1 * num3)
        break
    case '/':
        console.log(num1 / num3)
        break
    case '%':
        console.log(num1 % num3)
        break
    default:
        console.log('Invalid operator')
}

// Q62. Create a traffic light system using if...else and switch.
let light = 'yellow'

if (light == 'red') {
    console.log('Stop')
} else if (light == 'yellow') {
    console.log('Get ready')
} else if (light == 'green') {
    console.log('Go')
}

switch (light) {
    case 'red':
        console.log('Stop')
        break
    case 'yellow':
        console.log('Get ready')
        break
    case 'green':
        console.log('Go')
        break
}

// Q63. Create an ATM withdrawal system.
let balance = 5000
let withdrawAmount = 3000

if (withdrawAmount <= balance) {
    balance = balance - withdrawAmount
    console.log(balance)
} else {
    console.log('Insufficient balance')
}

// Q64. Create a leap year checker.
let year = 2024

if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    console.log('Leap year')
} else {
    console.log('Not a leap year')
}

// Q65. Create a password strength checker.
let password2 = "pass123"
if (password2.length >= 12) {
    console.log("Strong");
} else if (password2.length >= 8) {
    console.log("Medium");
} else if (password2.length < 8) {
    console.log("Weak");
}


// Q66. Create a discount calculator with multiple conditions.
let price6 = 2500
let isPremiumMember = false
let discount4

if (isPremiumMember) {
    discount4 = 30
} else if (price2 >= 5000) {
    discount4 = 25
} else if (price2 >= 3000) {
    discount4 = 20
} else if (price2 >= 1000) {
    discount4 = 15
} else {
    discount4 = 10
}

console.log(price6 - (price6 * discount4 / 100))

// Q67. Create a student eligibility checker.
let marks8 = 75
let attendance2 = 80
let hasFee = true

if (marks3 >= 40 && attendance >= 75 && hasFee) {
    console.log('Eligible')
} else {
    console.log('Not eligible')
}

// Q68. Create a number classifier.
let num10 = 0

if (num10 == 0) {
    console.log('Zero')
} else if (num10 > 0) {
    console.log(num10 % 2 == 0 ? 'Positive even' : 'Positive odd')
} else {
    console.log(num10 % 2 == 0 ? 'Negative even' : 'Negative odd')
}

// Q69. Create a rock-paper-scissors game.
let playerChoice = 'rock'
let computerChoice = 'scissors'

if (playerChoice == computerChoice) {
    console.log('Draw')
} else if (playerChoice == 'rock') {
    if (computerChoice == 'scissors') {
        console.log('You win')
    } else {
        console.log('Computer wins')
    }
} else if (playerChoice == 'scissors') {
    if (computerChoice == 'paper') {
        console.log('You win')
    } else {
        console.log('Computer wins')
    }
} else if (playerChoice == 'paper') {
    if (computerChoice == 'rock') {
        console.log('You win')
    } else {
        console.log('Computer wins')
    }
}

// Q70. Create a time-based greeting system.
let hour = 14

if (hour >= 5 && hour < 12) {
    console.log('Good morning')
} else if (hour >= 12 && hour < 17) {
    console.log('Good afternoon')
} else if (hour >= 17 && hour < 21) {
    console.log('Good evening')
} else {
    console.log('Good night')
}