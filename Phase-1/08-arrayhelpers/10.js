// // min max
// let nums = [2, 3, 4, 5, 1]
// const min = nums.reduce((acc, curr) => {
//     if (acc < curr) {
//         return acc
//     }
//     return curr
// })
// console.log(min);

// const max = nums.reduce((acc, curr) => {
//     if (acc > curr) {
//         return acc
//     }
//     return curr
// })
// console.log(max);

let nega = [-1, -4, -234, -12]

let max1 = nega.reduce((acc, curr) => {
    console.log(acc, curr);
    if (acc > curr) {
        return acc

    }
    return curr
}, nega[1])
console.log(max1);

let a = [1, 2, 3, 4, 5]
let sum2 = a.reduce((acc, curr) => {
    console.log(acc,curr);
    return acc + curr
}, a[0])
console.log(sum2);

