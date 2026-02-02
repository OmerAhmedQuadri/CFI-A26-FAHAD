// Section 2: Rectangle Patterns (8 Questions)
// Q11. What will be the output?

let i = 0

while (i < 3) {
    let j = 0
    let row = ''
    while (j < 5) {
        row = row + '* '
        j++
    }
    console.log(row)
    i++
}
// Your Prediction:
// * * * * * 
// * * * * * 
// * * * * *

// Q12. Create a 4x6 rectangle pattern (4 rows, 6 columns):

// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

let i2 = 0
while (i2 < 4) {
    let j2 = 0
    let row1 = ''
    while (j2 < 6) {
        row1 = row1 + '* '
        j2++
    }
    console.log(row1);
    i2++
}

// Q13. Create a pattern with numbers:
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3

let i1 = 1
while (i1 <= 3) {
    let j1 = 0
    let row = ''
    while (j1 < 4) {
        row = row + i1 + " "
        j1++
    }
    console.log(row);
    i1++
}

// Q14. Create this pattern:
// # # # # #
// # # # # #
// # # # # #
// # # # # #
// # # # # #
// Your Code:
let i3 = 0
while (i3 < 5) {
    let j3 = 0
    let row2 = ''
    while (j3 < 5) {
        row2 = row2 + '#' + ' '
        j3++
    }
    console.log(row2);
    i3++
}

// Q15. What will be the output?

let i4 = 1

while (i4 <= 3) {
    let j4 = 1
    let row = ''
    while (j4 <= 4) {
        row = row + i + ' '
        j4++
    }
    console.log(row)
    i4++
}
// Your Prediction:
// 3 3 3 3 
// 3 3 3 3 
// 3 3 3 3 

// Q16. Create this pattern (each row shows its row number):

// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
// Your Code:
let i5 = 1
while (i5 < 5) {
    let j5 = 0
    let row3 = ''
    while (j5 < 5) {
        row3 = row3 + i5 + ' '
        j5++
    }
    console.log(row3);
    i5++
}

// Q17. Create this pattern (each column shows its column number):

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// Your Code:
let i6 = 1
while (i6 < 4) {
    let j6 = 0
    let row4 = ''
    while (j6 < 5) {
        row4 = row4 + i6 + ' '
        j6++
        i6++
    } console.log(row4);

}

let k = 0
while (k < 2) {
    let i6 = 1
    while (i6 < 3) {
        let j6 = 0
        let row4 = ''
        while (j6 < 5) {
            row4 = row4 + i6 + ' '
            j6++
            i6++
        } console.log(row4);
        k++
    }
}

//calculate the number of 0s in the factorial of the given number
// let i7 = 0
let n = 25
let j7 = 0
// let max = n
let count = 0

// while (max <= 0) {
//     max = n - 5
//     console.log(max);
//     max++
// }

while (j7 < 100) {
    if (n % 5 == 0){
        
    }
}

console.log(count);