import readline from "readline-sync";

let i = 0
let max = 10
while (i < max) {
    console.log(i * 2 + 1);
    i++
}

//write a program to print first n odd numbers
let odd = 0
let max1 = readline.questionInt("enter a number: ")
while (odd < 10) {
    console.log(odd * 2 + 1);
    odd++
}

let i1 = 0
let max2 = readline.questionInt("enter a number: ")
const odd1 = []
while (i1 < max2) {
    odd1.push(i1 * 2 + 1);
    i1++
}
console.log(odd1);


