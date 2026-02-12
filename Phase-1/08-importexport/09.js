const nums = [1, 2, 3, 4, 5]
let str = ['a', 'b', 'c']

const sum = nums.reduce((pre, curr) => {
    console.log(pre, curr);
    return pre + curr
})
console.log(sum);

const product = nums.reduce((pre, curr) => {
    console.log(pre, curr);
    return pre * curr
}, 1)
console.log(sum);

const sum2 = nums.reduce((acc, curr) => {
    return acc + curr
})

