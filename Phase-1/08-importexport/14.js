// const nums = [23, 54, 96, 108, 73]
// const result = nums.find((ele,i) => {
//     if (ele % 2 == 0){
//         console.log(i);
//         return true
//     }
// })
// console.log(result);

const users = [
    { name: 'omer', age: 17 },
    { name: 'fahad', age: 21 },
    { name: 'zayd', age: 23 },
    { name: 'taha', age: 22 },
    { name: 'atif', age: 21 },
    { name: 'yash', age: 21 },
    { name: 'haseeb', age: 20 },
    { name: 'abdu', age: 22 },
    { name: 'anas', age: 24 },
    { name: 'maseeh', age: 23 },
    { name: 'afnan', age: 23 },
]
const res = users.find((ele) => {
    if (ele.age > 23) {
        return true
    }
})
console.log(res);

