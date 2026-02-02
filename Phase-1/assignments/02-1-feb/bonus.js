// Bonus 3: Create a program that finds the largest number in an array using a for loop:

// Find and print the largest number
// Your Code:
let numbers = [45, 23, 89, 12, 67, 34, 91, 56]
let largest = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]
    }
} console.log(largest);
