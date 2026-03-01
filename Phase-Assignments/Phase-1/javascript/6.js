// / Q No : 01
// / Question: 6. Write a program to reverse a string.
// Ex: ‘Hello’ -> ‘olleH’

let str = 'Hello'
let str1 = ''
for (let i = str.length - 1; i >= 0; i--){
    str1 = str1 + str[i]
}
console.log(str1);



// / Expected Output: <write expected output></write>
// olleH