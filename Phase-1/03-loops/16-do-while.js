// //do while executes the cod eatleast once even if the condition is false

import readline from 'readline-sync'

// do {
//     console.log('hello');
// } while (false);

// let i = 0
// do {
//     console.log('hello');
//     i++
// } while (i < 10);


// let i1 = 50

// do {
//     if (i1 % 3 == 0)
//         console.log(i1);
//     i1++
// } while (i1 <= 100);

// let i2 = 900
// do {
//     if (i2 % 3 == 0)
//         console.log(i2);
//     i2++
// } while (i2 <= 100);

// let oneTimePassword = 4444
// let userInput
// do {
//     userInput = readline.questionInt("enter the password: ")
// } while (oneTimePassword !== userInput);
// console.log("user logged in succesfully!!");

let oneTimePassword1 = 4444
let userInput1
let count = 0
let attempts = 5
let status = true
do {
    if (count == attempts) {
        status = false
        break
    }
    count++
    userInput1 = readline.questionInt("enter the password: ")
} while (oneTimePassword1 !== userInput1);

if (status == true) {
    console.log("login successful");
} else {
    console.log("login unsuccesful");
}