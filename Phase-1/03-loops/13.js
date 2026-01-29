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

let even3 = 2
let max3 = readline.questionInt("enter a number: ") * 2
while (even3 <= max3) {
    if (even3 % 2 == 0) {
        console.log(even3);
    }
    even3++

}

let i = 1
let n = readline.questionInt("enter a number: ")
let even4 = 2
while (i <= 10) {
    console.log(even4);
    even4 = even4 + 2
    i++
}

let i1 = 1
let n1 = readline.questionInt("enter a number: ")
while (i1 <= n) {
    console.log(i * 2);
    i++
}

// let i2 = 1
// let n2 = readline.questionInt("enter a number: ")
// let arr = []
// while (i2 <= n2) {
//     arr.push(i2 * 2);
//     i2++
// }
// console.log(arr);


