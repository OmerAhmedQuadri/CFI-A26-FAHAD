// Section 4: 2D Arrays / Matrix (5 Questions)
// Q16. What will be the output?

let matrix = [
    [11, 22, 33],
    [111, 222, 333, 444],
    [1000, 2000, 3000]
]

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i])
}
// Your Prediction:
// [11, 22, 33]
// [111, 222, 333, 444]
// [1000, 2000, 3000]

// Question: What does matrix.length return?
//it returns the length of the matrix array which is 3

// Q17. What will be the output?

let matrix1 = [
    [11, 22, 33],
    [111, 222, 333, 444],
    [1000, 2000, 3000]
]

let sum = 0
for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < 3; j++) {
        sum = sum + matrix1[i][j]
        console.log(matrix1[i][j])
    }
}
console.log(sum)
// Your Prediction:
// 11
// 22
// 33
// 111
// 222
// 333
// 1000
// 2000
// 3000

// Final Sum:
// 6732

// Q18. What will be the output?
let matrix2 = [
    [11, 22, 33],
    [111, 222, 333, 444],
    [1000, 2000, 3000]
]

for (let i = 0; i < matrix2.length; i++) {
    for (let j = 0; j < 3; j++) {
        matrix2[i][j] = matrix2[i][j] * 10
        console.log(matrix2[i][j])
    }
}
// Your Prediction:
// 110
// 220
// 330
// 1110
// 2220
// 3330
// 10000
// 20000
// 30000

// Question: What happens to the original matrix?
//each element of the originail matrix is getting updated by times 10


// Q19. Create a 3x3 matrix (2D array) with numbers 1-9:
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// Then use nested for loops to:

// Print each element
// Calculate the sum of all elements
// Your Code:
let matrix3 = []
let max = 3
let j = 1
for (let i = 0; i < 3; i++) {
    let arr = []
    for (j; j <= max; j++) {
        arr.push(j)

    }
    max += 3
    matrix3.push(arr)
} console.log(matrix3);

let sum1 = 0
for (let i = 0; i < matrix3.length; i++) {
    for (let j = 0; j < matrix3.length; j++) {
        sum1 = sum1 + matrix3[i][j]
        console.log(matrix3[i][j]);
    }
}
console.log(sum1);


// Q20. Create a 2x4 matrix (2 rows, 4 columns) with any numbers. Use nested loops to:
// Multiply each element by 2
// Print the updated matrix
// Your Code:
let arr = [[1, 2, 3, 4], [5, 6, 7, 8]]
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = arr[i][j] * 2
    }
} console.log(arr);

