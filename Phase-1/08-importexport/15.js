// const nums = [23, 54, 96, 108, 73]
// const result = nums.findIndex((ele) => {
//     if (ele % 2 == 0) {
//         return true
//     }
// })
// console.log(result);

// const users = [
//     { name: 'omer', age: 17 },
//     { name: 'fahad', age: 21 },
//     { name: 'zayd', age: 23 },
//     { name: 'taha', age: 22 },
//     { name: 'atif', age: 21 },
//     { name: 'yash', age: 21 },
//     { name: 'haseeb', age: 20 },
//     { name: 'abdu', age: 22 },
//     { name: 'anas', age: 24 },
//     { name: 'maseeh', age: 23 },
//     { name: 'afnan', age: 23 },
// ]
// const index = users.findIndex((ele) => {
//     if (ele.age > 23) {
//         return true
//     }
// })
// console.log(index, users[index]);

// console.log(Date.now())
const first = Number(Date.now())
for (let i = 0; i < 100000000; i++) {
    const a = i & 1
}
const second = Number(Date.now())
console.log(second - first);

for (let i = 0; i < 100000000; i++) {
    const a = (i % 2) === 2
}
const third = Number(Date.now())
console.log(third - second);
// console.log(Date.now());

const repeat = (func, num) => {
    for (let i = 0; i < num; i++){
        func()
    }

}

function sayHello(){
    console.log('hello world');
}

console.log(repeat(sayHello,6));
