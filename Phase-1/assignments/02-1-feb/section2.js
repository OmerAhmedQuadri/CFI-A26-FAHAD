// Section 2: Nested For Loops - Patterns (5 Questions)
// Q6. What will be the output?

let max = 5

for (let rows = 0; rows < max; rows++) {
    let str = ''
    for (let cols = 0; cols <= rows; cols++) {
        str = str + rows + cols
    }
    console.log(str)
}
// Your Prediction:
// 00
// 1011
// 202122
// 30313233
// 4041424344

// Q7. What will be the output?
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log('omer')
    }
}
// Your Prediction:
// omer
// omer
// omer
// omer
// omer
// omer
// How many times will "omer" be printed? 
// 6

// Q8. Create this pattern using nested for loops:

// *
// * *
// * * *
// * * * *
// * * * * *
// Your Code:
let str = ''
for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 5; j++) {
        str = str + '* '
        console.log(str);
    }
}

// Q9. Create this pattern:

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// Your Code:
let str1 = ''
for (let i = 0; i < 1; i++) {
    for (let j = 1; j <= 5; j++) {
        str1 = str1 + j + ' '
        console.log(str1);
    }
}

// Q10. What will be the output?
let rows = 4
let cols = 5

for (let i = 1; i <= rows; i++) {
    let str = ''
    for (let j = i; j <= cols + i - 1; j++) {
        str = str + j + ' '
    }
    console.log(str)
}
// Your Prediction:
// 1 2 3 4 5
// 2 3 4 5 6 
// 3 4 5 6 7
// 4 5 6 7 8

