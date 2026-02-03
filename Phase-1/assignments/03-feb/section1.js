// Section 1: Basic Functions (8 Questions)
// Q1. What will be the output?

function sayHello(name) {
    console.log('Hello ' + name)
}

sayHello('omer')
sayHello('taha')
sayHello('maseeh')
// Your Prediction:
// Hello omer
// Hello taha
// Hello maseeh

// Q2. Create a function called greet that takes a name as parameter and prints "Welcome [name]!". Call it 3 times with different names.

function greet(name) {
    console.log('Welcome', name + "!");
}
greet("fahad");
// Expected Output:

// Welcome Omer!
// Welcome Ali!
// Welcome Sara!


// Q3. What will happen if you run this code?

console.log(sayHello)

function sayHello(name) {
    console.log('Hello ' + name)
}
// Your Prediction:
// [Function: sayHello]

// Explanation: Why does this happen?
// this happened because we are not calling the function properly

// Q4. Create a function called printMessage that takes no parameters and prints "JavaScript is awesome!" three times.

function printMessage() {
    console.log('Javascript is awesome!');
    console.log('Javascript is awesome!');
    console.log('Javascript is awesome!');
}

printMessage()

// Q5. What will be the output?

function displayInfo(name, age, city) {
    console.log('Name:', name)
    console.log('Age:', age)
    console.log('City:', city)
}

displayInfo('Omer', 25, 'Hyderabad')
// Your Prediction:
// Name: Omer
// Age: 25
// City: Hyderabad

// Q6. Create a function introduce that takes 3 parameters: name, age, and profession. Print them using template literals in one line.
// Your Code:
function introduction(name, age, profession) {
    console.log(`Hello, I am ${name} i am ${age} years old and i am a ${profession} `);
}
introduction('fahad', 21, 'student')


// Q7. What's wrong with this code?
// sayHello('Omer')

// let sayHello = function(name) {
//     console.log('Hello ' + name)
// }
// Your Answer:
// this code is calling the function before it is even decalred
// Fix the code:

let sayHello1 = function (name) {
    console.log('Hello ' + name)
}
sayHello1('Omer')

// Q8. Create a function multiply that takes two numbers and prints their product. Call it with values (5, 4), (10, 3), and (7, 8).
// Your Code:
function multiply(a, b) {
    console.log(a * b);
}
multiply(5, 4)
multiply(10, 3)
multiply(7, 8)