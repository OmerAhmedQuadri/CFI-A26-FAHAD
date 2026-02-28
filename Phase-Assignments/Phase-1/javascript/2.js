// / Q No : 02
// / Question: 2. Write a program that prints the sum of numbers from 1 to N (take N as input).

import { questionInt } from 'readline-sync'
let n = questionInt(`Enter the max number: `)
let sum = 0
for (let i = 1; i <= n; i++) {
    sum += i
}
console.log(sum);


// / Expected Output: <write expected output></write>
// Enter the max number: 5
// 15
