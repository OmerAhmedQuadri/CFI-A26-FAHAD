// Section 1: Understanding Nested Loops (10 Questions)

// Q1. What will be the output?

let i = 0
let j = 0

while (i < 3) {
    while (j < 2) {
        console.log('i:', i, 'j:', j)
        j++
    }
    i++
}
// Your Prediction:i: 
// i: 0 j: 0
// i: 0 j: 1

// Explanation: Why does j only go from 0 to 1?
// because it satisfies the condition

// Q2. What will be the output?

let i1 = 0

while (i1 < 3) {
    let j1 = 0
    while (j1 < 2) {
        console.log('i1:', i1, 'j1:', j1)
        j1++
    }
    i1++
}
// Your Prediction:
// i1: 0 j1: 0
// i1: 0 j1: 1
// i1: 1 j1: 0
// i1: 1 j1: 1
// i1: 2 j1: 0
// i1: 2 j1: 1

// Explanation: What's the difference from Q1?
// we are declaring the j variable inside the loop

// Q3. What will be the output?
let i2 = 1

while (i2 <= 3) {
    let j2 = 1
    while (j2 <= 2) {
        console.log(i2, 'x', j2, '=', i2 * j2)
        j2++
    }
    i2++
}
// Your Prediction:
// 1 x 1 = 1
// 1 x 2 = 2
// 2 x 1 = 2
// 2 x 2 = 4
// 3 x 1 = 3
// 3 x 2 = 6

// Q4. Create a nested loop that prints:

// Outer: 0, Inner: 0
// Outer: 0, Inner: 1
// Outer: 0, Inner: 2
// Outer: 1, Inner: 0
// Outer: 1, Inner: 1
// Outer: 1, Inner: 2
// Your Code:
let i3 = 0
while (i3 < 2) {
    let j3 = 0
    while (j3 <= 2) {
        console.log('outer: ', i3, ', inner: ', j3);
        j3++
    } i3++
}

// Q5. What will be the output?

let i4 = 0

while (i4 < 2) {
    let j4 = 0
    while (j4 < 3) {
        console.log('*')
        j4++
    }
    console.log('---')
    i4++
}
// Your Prediction:
// *
// *
// *
// ---
// *
// *
// *
// ---

// Q6. How many times will "Hello" be printed?

let i5 = 0

while (i5 < 4) {
    let j5 = 0
    while (j5 < 3) {
        console.log('Hello')
        j5++
    }
    i5++
}
// Your Answer: 
// 12


// Q7. Create a nested loop that prints numbers from the multiplication:
// 1 2
// 2 4
// 3 6

let i6 = 1
let j6 = 2
while (i6 <= 3) {
    while (j6 <= 6) {
        console.log(i6, j6);
        j6 += 2
        i6++
    }
}

// Q8. What will be the output?

let i7 = 1

while (i7 <= 2) {
    console.log('Outer loop:', i7)
    let j7 = 1
    while (j7 <= 3) {
        console.log('  Inner loop:', j7)
        j7++
    }
    i7++
}
// Your Prediction:
// Outer loop: 1
//   Inner loop: 1
//   Inner loop: 2
//   Inner loop: 3
// Outer loop: 2
//   Inner loop: 1
//   Inner loop: 2
//   Inner loop: 3

// Q9. Fill in the blanks:

let i8 = 0
while (i8 < 12) {      // Outer loop runs 12 times
    let j8 = 0
    while (j8 < 1) {  // Inner loop runs 12 times
        console.log(i8, j8)
        j8++
    }
    i8++
}
// Total prints: 12

// Q10. Explain in your own words: What is a nested loop?

// Your Answer:
// a nested loop is a loops that exists inside an already existing loop