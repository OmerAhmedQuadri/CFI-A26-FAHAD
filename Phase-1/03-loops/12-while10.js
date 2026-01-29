//find the sum of first n natural numbers
import readline from 'readline-sync'
let sum = 1
let i = 2
let n = readline.questionInt("ENTER A NUMBER: ")

while (i <= n) {
    sum = sum + i
    i++
}
console.log(sum);