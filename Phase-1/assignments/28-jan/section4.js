// Section 4: String Building with Loops


// Q27. Predict the output
let str = ''

str = str + '*'
console.log(str)

str = str + '*'
console.log(str)

str = str + '*'
console.log(str)
// *
// **
// ***

// Q28. Create the same output as Q27 using a while loop
let str1 = ''
let i1 = 0
while (i1 < 3) {
    console.log(str1 += '*');
    i1++
}


// Q29. Predict the output
let str2 = ''
let i2 = 0

while (i2 < 3) {
    str2 = str2 + '* '
    console.log(str2)
    i2++
}
console.log('rest of the code')
// * 
// * * 
// * * * 
// rest of the code


// Q30. Create a loop that prints:
// #
// ##
// ###
// ####
// #####
let str3 = ''
let i3 = 0
while (i3 < 5) {
    console.log(str3 += '#');
    i3++
}



// Q31. Predict the output
let str4 = ''
let i4 = 0

while (i4 < 4) {
    str4 = str4 + i4 + ' '
    console.log(str4)
    i4++
}
// 0 
// 0 1 
// 0 1 2 
// 0 1 2 3 



// Q32. Create a loop that prints:
// A
// A B
// A B C
// A B C D



// Q33. Predict the output
let str5 = ''
let i5 = 1

while (i5 <= 5) {
    str5 = str5 + i5 + ' '
    console.log(str5)
    i5++
}
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

// Q34. Create a loop that builds and prints "HELLO" one letter at a time:
// H
// HE
// HEL
// HELL
// HELLO



// Q35. Predict the output
let str6 = '0 '
let i6 = 1

while (i6 < 5) {
    str6 = str6 + i6 + ' '
    console.log(str6)
    i6++
}
// 0 1 
// 0 1 2 
// 0 1 2 3 
// 0 1 2 3 4 



// Q36. Create a loop that prints even numbers in this pattern:
// 2
// 2 4
// 2 4 6
// 2 4 6 8
// 2 4 6 8 10
let str7 = '2 '
let i7 = 4

while (i7 < 11) {
    str7 = str7 + i7 + ' '
    console.log(str7)
    i7++
    i7++
}