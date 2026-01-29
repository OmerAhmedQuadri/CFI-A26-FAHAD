import readline from "readline-sync";

//write a program to print first n even number
let even1 = 2
let max1 = readline.questionInt("enter a number: ")
while (even1 <= max1) {
    console.log(even1);
    even1 += 2
}

let even2 = 2
let max2 = readline.questionInt("enter a number: ")
while (even2 <= max2) {
    if (even2 % 2 == 0) {
        console.log(even2);
    }
    even2++

}

//write a program to print first n even number
let even = 2
let max = readline.questionInt("enter a number: ") * 2
while (even <= max) {
    console.log(even);
    even += 2
}


