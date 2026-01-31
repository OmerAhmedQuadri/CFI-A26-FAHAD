let arr = []
let i = 97
let str = ''
while (i < 102) {
    str = str + String.fromCharCode(i)
    arr.push(str)
    i++
}
console.log(arr);
i = arr.length - 1
while (i > -1) {
    console.log(arr[i--]);
}
//output 
// abcde
// abcd
// abc
// ab
// a

