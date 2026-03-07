//write a program to create an array and read all the elements of the array from user input
import readline from 'readline-sync'
// let arr = []
// let length = readline.questionInt("enter length of the array: ")
// for (let i = 0; i < length; i++) {
//     arr[i] = readline.questionInt("enter elements: ")
// } console.log(arr);

// let arr1 = []
// let length1 = readline.questionInt("enter length of the first array: ")
// let length2 = readline.questionInt("enter length of the nested array: ")

// for (let i = 0; i < length1; i++) {
//     arr1[i] = []
//     for (let j = 0; j < length2; j++) {
//         arr1[i][j] = readline.questionInt("enter elements: ")
//     }

// } console.log(arr1);

let arr2 = []
let length3 = readline.questionInt("enter length of the first array: ")
let length4 = readline.questionInt("enter length of the nested array: ")
while (true) {
    if (length3 < 0 || length4 < 0) {
        console.log('enter a valid number');
        length3 = readline.questionInt("enter length of the first array again: ")
        length4 = readline.questionInt("enter length of the nested array again: ")
    } else {
        break;
    }
}
for (let i = 0; i < length3; i++) {
    arr2[i] = []
    for (let j = 0; j < length4; j++) {
        arr2[i][j] = readline.questionInt("enter elements: ")
        if (arr2[i][j] < 0) {
            console.log('enter a valid number');
            // arr2[i][j] = readline.questionInt("enter elements again: ")
            j--
        }
    }

} console.log(arr2);

