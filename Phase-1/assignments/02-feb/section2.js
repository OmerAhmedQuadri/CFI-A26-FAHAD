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




