// Section 3: Arrays with For Loops (5 Questions)

// Q11. What will be the output?
let arr = [23, 54, 98, 76]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// Your Prediction:
// 23, 54, 98, 76
// Question: What does arr.length return?
// it returns 4

// Q12. Create an array with 5 numbers and use a for loop to:
// Print each number
// Calculate and print the sum of all numbers
// Your Code:

let arr1 = [10, 20, 30, 40, 50]
let sum = 0
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    sum = sum + arr1[i]
} console.log(sum);

// Expected Output:
// 10
// 20
// 30
// 40
// 50
// Sum: 150

// Q13. Create an array with 6 numbers and use a for loop to print only the even numbers from the array.

let arr2 = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 == 0) {
        console.log(arr2[i]);
    }
}

// Q14. What will be the output?

let arr3 = [5, 10, 15, 20]
let sum3 = 0

for (let i = 0; i < arr3.length; i++) {
    sum3 = sum3 + arr3[i]
}
console.log(sum3)
// Your Prediction: 
// 50

// Q15. Create an array with your favorite fruits (at least 5). Use a for loop to print each fruit with its index:

// 0: Apple
// 1: Banana
// 2: Mango
// ...
// Your Code:
let arr6 = [Apple, Banana, Mango, Kiwi, Guava]
for (let i = 0; i < arr6.length; i++) {
    console.log(`${i}: ${arr6[i]}`);
}