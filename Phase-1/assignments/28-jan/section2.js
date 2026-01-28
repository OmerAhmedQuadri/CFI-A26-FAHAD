// Section 2: While Loop with Post-Increment (i++)


// Q11. Predict the output
let i = 0

while (i < 10) {
    console.log(i++)
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9


// Q12. Predict the output
let i1 = 0

while (i1 < 10) {
    console.log(i1++)
}
console.log('some other code')

while (i1 < 5) {
    console.log(i1++)
}
console.log('rest of the code')
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// some other code
// rest of the code


// Q13. Create a while loop using i++ that prints numbers from 5 to 10
let num1 = 5
while (num1 <= 10) {
    console.log(num1++);
}


// Q14. What is the difference between these two versions?

// Version 1
let i2 = 0
while (i2 < 5) {
    console.log(i2)
    i2++
}

// Version 2
let i3 = 0
while (i3 < 5) {
    console.log(i3++)
}
//the only difference there is , is tht the increment is directly done in the console.log


// Q15. Predict the output
let num = 1

while (num <= 3) {
    console.log(num++)
    console.log(num)
}
// 1
// 2
// 2
// 3
// 3
// 4

// Q16. Create a loop that prints 10, 9, 8, 7, 6, 5 using post-decrement (i--)
let num3 = 10
while (num3 > 4) {
    console.log(num3--);
}


// Q17. Predict the output
let i4 = 0

while (i4 < 5) {
    console.log('Count:', i4++)
}
console.log('Final i:', i4)
// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Final i: 5



// Q18. Create a loop that prints every 2nd number from 0 to 10 using i++
// Expected Output:
// 0
// 2
// 4
// 6
// 8
// 10
let num4 = 0
while (num4 <= 10) {
    console.log(num4);
    num4++
    num4++
}