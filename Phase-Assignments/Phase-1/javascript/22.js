// / Q No : 22
// // / Question: 22. Write a program to find the average of numbers in an array.

let sum = 0
let count = 0
let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
    count++
}
let avg = sum / count
console.log(avg);


// // / Expected Output: <write expected output></write>
// 3