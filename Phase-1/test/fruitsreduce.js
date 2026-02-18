let fruits = ['apple', 'banana', 'apple', 'guava', 'apple']

let count = fruits.reduce((acc, curr) => {
    if (acc[curr] == undefined) {
        acc[curr] = 0
    }
    acc[curr] += 1
    return acc
}, {})

console.log(count);