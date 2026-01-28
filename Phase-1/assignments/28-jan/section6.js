// Section 6: User Input with readline-sync


// Q47. What does this code do?
import readlineSync from 'readline-sync'

let name = readlineSync.question('Enter your name: ')
let age = readlineSync.questionInt('Enter your age: ')

console.log(`Hello ${name}, you are ${age} years old`)
//It asks the user for their name and age from the terminal and then prints the console.log

// Q48. Create a program that asks for a name and prints
// "Welcome [name]!" 5 times using a loop
let name1 = readlineSync.question("Enter your name: ")
let i1 = 0
while (i1 < 5) {
    console.log(`Welcome ${name1}`);
    i1++
}


// Q49. What will happen when you run this?
import readlineSync from 'readline-sync'

let str = ''
let i = 0
let max = readlineSync.questionInt('Enter a number: ')

while (i < max) {
    str = str + '* '
    console.log(str)
    i++
}
//it takes a number from the user and prints how many line of stars you input eg 5
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 


// Q50. Create a program that:
// - Asks user for a number
// - Prints numbers from 1 to that number

let num2 = 1
let max2 = readlineSync.questionInt("Enter a number: ")
while (num2 < max2) {
    console.log(num2++);

}

// Q51. Create a program that:
// - Asks user for their name
// - Asks how many times to print it
// - Prints the name that many times
let name2 = readlineSync.question('Enter your name: ')
let max3 = readlineSync.questionInt('How many times to print it: ')
let i2 = 0
while (i2 < max3) {
    console.log(name2)
    i2++
}


// Q52. What is the difference between question() and questionInt()?
// question() takes input as a string, while questionInt() takes input as a number




// Q53. Create a multiplication table program:
// - Ask user for a number
// - Print multiplication table for that number (1 to 10)
// Example:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50
let num = readlineSync.questionInt('Number: ')
let i4 = 1

while (i4 <= 10) {
    console.log(num + ' x ' + i4 + ' = ' + (num * i4))
    i4++
}



// Q54. Create a program that:
// - Asks user for rows (number)
// - Prints star pattern with that many rows
// Example:
// *
// * *
// * * *
// * * * *
let rows = readlineSync.questionInt('Enter rows: ')
let str2 = ''
let i5 = 1

while (i5 <= rows) {
    str2 = str2 + '* '
    console.log(str2)
    i5++
}