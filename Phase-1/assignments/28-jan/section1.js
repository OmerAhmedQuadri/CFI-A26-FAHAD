// Section 1: Basic While Loop

// Q1. Predict the output
let num = 5

while (num > 0) {
    console.log('hello world', num)
    num--
}
console.log('rest of the code')
//hello world 5
//hello world 4
//hello world 3
//hello world 2
//hello world 1
//rest of the code


// Q2. Create a while loop that prints numbers from 1 to 5
// Expected Output:
// 1
// 2
// 3
// 4
// 5
let num2 = 1
while (num2 < 6) {
    console.log(num2);
    num2++
}


// Q3. Predict the output
let i = 1

while (i < 5) {
    console.log(i)
    i++
}
console.log('rest of the code')
//1
//2
//3
//4
//rest of the code


// Q4. Create a while loop that prints "Omer" 10 times

let name1 = 'omer'
let i2 = 0
while (i2 < 10) {
    console.log(name1);
    i2++
}

// Q5. Predict the final value of i and number of times "omer" is printed
let i3 = 0

while (i3 < 10) {
    console.log('omer')
    i3 = i3 + 1
}
console.log(i3)
//omer
//omer
//omer
//omer
//omer
//omer
//omer
//omer
//omer
//omer
//omer
//10


// Q6. Create a while loop that prints numbers from 10 to 1 (countdown)
// Expected Output:
// 10
// 9
// ...
// 1
let num4 = 10
while (num4 > 0) {
    console.log(num4);
    num4--
}


// Q7. Predict what happens
// let i4 = 0

// while (i4 < 5) {
//     console.log(i)
// }
// Explain why this happens
//0 will be printed infinitely , this happens becuz the condition always return true as it is not getting updated


// Q8. Create a while loop that prints even numbers from 2 to 10
// Expected Output:
// 2
// 4
// 6
// 8
// 10
let num5 = 2
while (num5 <= 10) {
    console.log(num5);
    num5 = num5 + 2
}




// Q9. Predict the output
let i1 = 0

while (i1 < 5) {
    console.log(i1)
    i1++
}
console.log('some other code')

while (i1 < 10) {
    console.log(i1)
    i1++
}
console.log('rest of the code')
// 0
// 1
// 2
// 3
// 4
// some other code
// 5
// 6
// 7
// 8
// 9
// rest of the code


// Q10. Create a while loop that prints odd numbers from 1 to 9
// Expected Output:
// 1
// 3
// 5
// 7
// 9
let num6 = 1
while (num6 <= 10) {
    console.log(num6);
    num6 = num6 + 2
}