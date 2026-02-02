// Section 1: Basic For Loops (5 Questions)
// Q1. What will be the output?

for (let i = 1; i <= 10; i++) {
    console.log(i)
}
// Your Prediction:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Q2. Convert this while loop to a for loop:

let i = 1
while (i <= 10) {
    console.log(i)
    i++
}
// Your Code (for loop):
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Q3. What will be the output?
for (let i = 1; i <= 10; i++) {
    if (!(i % 2)) {
        console.log(i)
    }
}
// Your Prediction:
// 2
// 4
// 6
// 8
// 10

// Explanation: What does !(i % 2) check?
// it checks for the all the falsey remainders in the 2 table

// Q4. What will be the output?
for (let i = 1; i <= 10; i++)
    if (!(i % 2)) {
        console.log(i)
        console.log('omer')
    }
// Your Prediction:
// 2
//omer
// 4
//omer
// 6
//omer
// 8
//omer
// 10
//omer
// Question: How many lines are inside the for loop?
// it has only one line

// Q5. Create a for loop that prints odd numbers from 1 to 20.
// Your Code:
for (let i = 1; i < 20; i++)
    if (i % 2) {
        console.log(i)
    }
// Expected Output:

// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19

