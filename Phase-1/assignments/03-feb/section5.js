// Section 5: User Input with Functions (4 Questions)
// Q27. What will be the output?

import readlineSync from 'readline-sync'

function userDetails() {
    let username = readlineSync.question('Enter username: ')
    let userrole = readlineSync.question('Enter the user role: ')

    return { username, userrole }
}

let user = userDetails()
console.log(user)
// Your Prediction (if user enters "Omer" and "Admin"):
// { username: 'Omer', userrole: 'Admin' }


// Q28. Create a function getAge that:
// Asks user for their age using readline-sync
// Returns the age as a number
// Store the returned value and print it
// Your Code:

function getAge(name, age) {
    age = readlineSync.questionInt("Enter age: ")
    return age
}
let age = (getAge())
console.log(age);


// Q29. Create a function login that:
// Asks for username and password using readline-sync
// If username is "admin" and password is "1234", return "Login successful"
// Otherwise, return "Invalid credentials"
// Print the returned message
// Your Code:

function login(name, pass) {
    name = readlineSync.question("enter name: ")
    pass = readlineSync.questionInt("enter pass: ")
    if (name == 'admin' && pass == 1234) {
        console.log('login sucessful');
    } else {
        console.log('invalid credentials');
    }
    return [name, pass]
}
login()


// Q30. Create a function calculator that:
// Asks user for two numbers
// Asks user for operation (+, -, *, /)
// Returns the result based on the operation
// Print the result

function calculator(a, b, c) {
    a = readlineSync.questionInt("enter first number: ")
    b = readlineSync.questionInt("enter second number: ")
    c = readlineSync.question("enter operator: ")
    switch (c) {
        case '+':
            console.log('Result:', a + b);
            break;
        case "-":
            console.log('Result:', a - b);
            break;
        case '*':
            console.log('Result:', a * b);
            break;
        case '/':
            console.log('Result:', a / b);
            break;
        default:
            console.log('invalid operator')
            break;
    }
    return
}

calculator()

// Example run:

// Enter first number: 10
// Enter second number: 5
// Enter operation (+, -, *, /): *
// Result: 50
