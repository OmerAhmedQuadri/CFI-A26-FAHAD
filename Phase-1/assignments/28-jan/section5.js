// Section 5: Pattern Problems – Part 1


// Q37. Predict the output
let i = 1
let n = 6
let str = ''

while (i < n) {
    str = str + i + ' '
    console.log(str)
    i++
}
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 


// Q38. Modify Q37 to print numbers from 1 to 10 in the same pattern
let i3 = 1
let n3 = 11
let str3 = ''

while (i3 < n3) {
    str3 = str3 + i3 + ' '
    console.log(str3)
    i3++
}


// Q39. Predict the output
let i2 = 0
let max = 4
let str2 = 'a '

while (i2 < max) {
    console.log(str2)
    str2 = str2 + 'a a '
    i2++
}
// a 
// a a a 
// a a a a a 
// a a a a a a a 


// Q40. Create this pattern:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
let pattern = ' '
let i4 = 1
let max4 = 7
while (i4 < max4) {
    pattern = pattern + i4
    console.log(pattern);
    i4++
}


// Q41. Create this pattern:
// *
// * *
// * * *
// * * * *
// * * * * *

let str1 = ""
let i5 = 0
while (i5 < 6) {
    str1 = str1 + "* "
    console.log(str1);
    i5++
}


// Q42. Create this pattern:
// @
// @ @
// @ @ @
// @ @ @ @

let str4 = ""
let i6 = 0
while (i6 < 4) {
    str4 = str4 + "@ "
    console.log(str4);
    i6++
}

// Q43. Create this pattern (numbers from 5 to 1):
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1



// Q44. Create this pattern:
// A
// A B
// A B C
// A B C D
// A B C D E
// Hint: Use String.fromCharCode(65) for 'A', 66 for 'B', etc.
let pattern1 = ''
let i7 = 65
while (i7 < 71) {
    console.log(pattern1);
    pattern1 = pattern1 + " " + String.fromCharCode(i7)
    i7++
}



// Q45. Create this pattern (odd numbers):
// 1
// 1 3
// 1 3 5
// 1 3 5 7
// 1 3 5 7 9
let odd = ""
let i8 = 1
while (i8 < 10) {
    odd = odd + i8
    console.log(odd);
    i8 += 2
}


// Q46. Create this pattern (even numbers):
// 2
// 2 4
// 2 4 6
// 2 4 6 8
// 2 4 6 8 10
let even = ""
let i9 = 2
while (i9 <= 10) {
    even = even + i9++
    console.log(even);
    i9++
}
