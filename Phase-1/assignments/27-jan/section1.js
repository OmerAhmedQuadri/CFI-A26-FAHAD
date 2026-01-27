// Section 1: Simple if Statement

// Q1. Create a variable temperature with value 35.
// Use an if statement to print "It's hot!" if temperature is greater than 30.
let temperature = 35
if (temperature > 30) {
    console.log(`its hot!`);
}


// Q2. Create a variable age with value 16.
// Use an if statement to print "You can drive" only if age is 18 or more.
let age = 16
if (age >= 18) {
    console.log("You can drive");
}

// Q3. Predict the output and explain why.

let num = 0
if (num) {
    console.log('Number exists')
}
console.log('End of code') // OUTPUT - End of code , because num variable holds a falsey value therefore the if block is not executed


// Q4. Predict the output.

let username = "admin"

if (username) {
    console.log('Welcome ' + username)
}

console.log('Rest of the code') //Welcome admin


// Q5. Create a variable score with value 95.
// Print "Excellent!" if score is greater than or equal to 90.
let score = 95
if (score >= 90) {
    console.log("Excellent!");

}

// Q6. Predict the output.

let price = 100

if (price >= 50) {
    console.log('Expensive item') //Expensive iten
}


// Q7. Create a variable isRaining with value true.
// Print "Take an umbrella" only if it is raining.
let isRaining = true
if (isRaining == true) {
    console.log("Take an umbrella");
}

// Q8. Predict the output.

let name = ""

if (name) {
    console.log('Hello ' + name)
}

console.log('Program ended') //Program ended


// Q9. Create a variable marks with value 85.
// Print "Pass" if marks is 40 or more.
let marks = 85
if (marks >= 40) {
    console.log("PASS");
}

// Q10. Predict the output and explain how many lines are inside the if statement.

let num2 = 50

if (num2 > 30)
    console.log('Greater than 30')
console.log('This is a big number')

console.log('Done') //'Greater than 30' 'This is a big number' 'Done' , ONLY ONE LINE IN IF STATEMENT