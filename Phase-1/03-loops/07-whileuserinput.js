import input from 'readline-sync';

//*
//** 
//*** 

let str1 = ""
let i = 0
let max = input.questionInt("Enter a number: ")

while (i < max) {
    str1 = str1 + "* "
    console.log(str1);
    i++
}
console.log('rest of the code');