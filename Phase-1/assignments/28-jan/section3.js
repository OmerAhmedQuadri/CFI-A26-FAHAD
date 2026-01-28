// Section 3: While Loop with Pre-Increment (++i)


// Q19. Predict the output
let i1 = 0

while (i1 < 10) {
    console.log(++i1)
}
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


// Q20. Predict the output
let i2 = 0

while (i2 < 10) {
    console.log(++i2)
}
console.log('some other code')

while (i2 < 5) {
    console.log(++i2)
}
console.log('rest of the code')
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
// some other code
// rest of the code

// Q21. Compare the outputs of these two versions

// Version 1: Post-increment
let i3 = 0
while (i3 < 5) {
    console.log(i3++)
}

// Version 2: Pre-increment
let i4 = 0
while (i4 < 5) {
    console.log(++i4)
}
//in version 1 the i3 gets printed then it is incremented , whereas in version 2 the i4 is getting incremented first then it is printing

// Q22. Create a while loop using ++i that prints numbers from 1 to 5
let num1 = 0
while (num1 < 5) {
    console.log(++num1);

}


// Q23. Predict the output
let num = 0

while (num < 3) {
    console.log(++num)
    console.log(num)
}
// 1
// 1
// 2
// 2
// 3
// 3


// Q24. Fill in the outputs 

// i = 0; while (i < 3) console.log(i++)
// First: 0  Second: 1  Third: 2

// i = 0; while (i < 3) console.log(++i)
// First: 1  Second: 2  Third: 3 

// i = 1; while (i < 4) console.log(i++)
// First: 1  Second: 2  Third: 3

// i = 1; while (i < 4) console.log(++i)
// First: 2  Second: 3  Third: 4


// Q25. Create a countdown from 5 to 1 using pre-decrement (--i)
let num2 = 6
while (num2 > 1) {
    console.log(--num2);
}


// Q26. Predict the output
let i = 0

while (++i < 5) {
    console.log(i)
}
console.log('Final:', i)
// 1
// 2
// 3
// 4
// Final: 5