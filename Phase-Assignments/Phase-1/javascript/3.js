// / Q No : 03
// / Question: 3. Write a function that prints multiplication table of a given number.
// (take user input for n)
// Example output if n = 3:
// 3 x 1 = 3
// 3 x 2 = 6
// .
// .
// 3 x 10 = 30

import { questionInt } from "readline-sync";
let n = questionInt(`Enter a number: `)
for (let i = 0; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}


// / Expected Output: <write expected output></write> 
// Enter a number: 3
// 3 x 0 = 0
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30