// Level 1 - Basics (Questions 1-10)
// Q1. You have this array:

const nums = [5, 10, 15, 20, 25]
// Use .reduce() to find the sum of all numbers. Expected output: 75
const sum = nums.reduce((acc, curr) => {
    return acc + curr
})
console.log(sum);

// Q2. You have this array:

const nums1 = [2, 3, 4, 5]
// Use .reduce() to find the product (multiplication) of all numbers. Expected output: 120
const product = nums1.reduce((acc, curr) => {
    return acc * curr
})
console.log(product);

// Q3. You have this array:

const nums2 = [45, 23, 67, 12, 89, 34]
// Use .reduce() to find the maximum number. Start with nums[0] as the initial value. Expected output: 89
const max = nums2.reduce((acc, curr) => {
    if (acc > curr) {
        return acc
    }
    return curr
}, nums2[0])
console.log(max);

// Q4. You have this array:

const nums3 = [45, 23, 67, 12, 89, 34]
// Use .reduce() to find the minimum number. Start with nums[0] as the initial value. Expected output: 12
const min = nums3.reduce((acc, curr) => {
    if (acc < curr) {
        return acc
    }
    return curr
}, nums3[0])
console.log(min);

// Q5. You have this array:

const words = ['hello', 'world', 'javascript', 'is', 'awesome']
// Use .reduce() to concatenate all words into a single string with spaces between them. Expected output: "hello world javascript is awesome"
const single = words.reduce((acc, curr) => {
    return acc + " " + curr
})
console.log(single);

// Q6. You have this array:

const nums5 = [10, 20, 30, 40, 50]
// Use .find() to find the first number greater than 25. Expected output: 30
const greater = nums5.find((ele) => {
    if (ele > 25) {
        return true
    }
})
console.log(greater);

// Q7. You have this array:

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
]
// Use .find() to find the user with name 'Bob'. Expected output: { name: 'Bob', age: 30 }
let findname = users.find((ele) => {
    if (ele.name == 'Bob') {
        return true
    }
})
console.log(findname);


// Q8. Using the same users array from Q7, use .findIndex() to find the index of the user named 'Charlie'. Expected output: 2

const findnameindex = users.findIndex((ele) => {
    if (ele.name == 'Charlie') {
        return true
    }
})
console.log(findnameindex);

// Q9. You have this array:

const nums6 = [5, 12, 8, 130, 44]
// Use .findIndex() to find the index of the first number greater than 100. Expected output: 3
const firstgreat = nums6.findIndex((ele) => {
    if (ele > 100) {
        return true
    }
})
console.log(firstgreat);

// Q10. You have this array:

const nums7 = [1, 2, 3, 4, 5]
// Use .reduce() without an initial value. What happens? Write your observation as a comment. Then run it with initial value 0 and compare the console logs.

//When no initial value is provided, the first element of the array 
// is used as the initial accumulator value, and the iteration starts with the second
// element as the first current Value

