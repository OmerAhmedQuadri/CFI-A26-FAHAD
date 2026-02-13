const arr = ['apple', 'banana', 'orange']

const res = arr.reverse()
console.log(arr);
console.log(res);
console.log(arr==res);//returns true cuz both points to same reference block which means if you change res arr will change too

let arr2 = 'abcd'
let reversed = arr2.split('').reverse().join('')

console.log(reversed);
console.log(arr2);
