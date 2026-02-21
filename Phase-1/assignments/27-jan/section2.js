// Section 2: if...else Statements

// Q11. Create a variable age with value 15.
// Print "Adult" if age is 18 or more, otherwise print "Minor".
let age1 = 15
if (age1 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Q12. Predict the output.

let num3 = 7

if (num3 >= 10) {
    console.log('Number is greater than or equal to 10')
} else {
    console.log('Number is less than 10')
} //Number is less than 10


// Q13. Create a variable number with value 8.
// Print "Even" or "Odd" using if...else.
let number = 8
if (number % 2 == 0) {
    console.log('EVEN');
} else {
    console.log('ODD');
}

// Q14. Predict the output.

let username2 = 'omer'

if (username2 == 'admin') {
    console.log('Hello admin')
} else {
    console.log('Hello user')
}//Hello user


// Q15. Create a variable password with value "pass123".
// Check against "admin123" and print result.
let password = `pass123`
if (password == `admin123`) {
    console.log('LOGIN SUCCESSFUL');
} else {
    console.log(`LOGIN UNSUCCESSFUL`);
}

// Q16. Predict the output.

let marks2 = 35

if (marks2 >= 40) {
    console.log('Pass')
} else {
    console.log('Fail')
}// Fail


// Q17. Create variables a = 10 and b = 20.
// Print which number is larger.
let a1 = 10
let b1 = 20
if (a1 > b1) {
    console.log(`${a1} is greater`);
} else {
    console.log(`${b1} is greater`);
}

// Q18. Predict the output.

let temperature1 = 25

if (temperature1 > 30) {
    console.log('Hot weather')
} else {
    console.log('Pleasant weather')
}// Pleasant weather


// Q19. Create a variable num with value -5.
// Print "Positive" or "Negative or Zero".
let numq19 = -5
if (numq19 > 0) {
    console.log("Positive");
} else {
    console.log("Negative or Zero");
}

// Q20. Predict the output and explain scope.

let name2 = 'Omer'

if (true) {
    let name2 = 'Ahmed'
    console.log(name2)
}

console.log(name2) //Ahmed Omer

