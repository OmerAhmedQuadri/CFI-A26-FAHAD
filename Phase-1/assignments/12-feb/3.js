// Level 3 - Advanced (Questions 21-30)
// Q21. You have this array:

const users = [
    { name: 'Alice', age: 17, country: 'India' },
    { name: 'Bob', age: 22, country: 'USA' },
    { name: 'Charlie', age: 15, country: 'India' },
    { name: 'David', age: 25, country: 'India' },
    { name: 'Eve', age: 19, country: 'USA' }
]
// Use .reduce() to group users by age groups:

// minors: age < 18
// adults: age >= 18 and age < 25
// seniors: age >= 25
// Return object like:

// {
//   minors: [{ name: 'Alice', ... }, { name: 'Charlie', ... }],
//   adults: [{ name: 'Bob', ... }, { name: 'Eve', ... }],
//   seniors: [{ name: 'David', ... }]
// }

const group = users.reduce((acc, curr) => {
    if (curr.age < 18) {
        acc.minors.push(curr)
    } else if (curr.age >= 18 && curr.age < 25) {
        acc.adults.push(curr)
    } else if (curr.age >= 25) {
        acc.seniors.push(curr)
    }
    return acc
}, { minors: [], adults: [], seniors: [] })
console.log(group);


// Q22. You have this array:

const nums = [[1, 2], [3, 4], [5, 6], [7, 8]]
// Use .reduce() to flatten this 2D array into a single array. Expected output: [1, 2, 3, 4, 5, 6, 7, 8]

const flat = nums.reduce((acc, curr) => {
    acc.push(...curr)
    return acc
}, [])
console.log(flat);

// Q23. You have this array:

const transactions = [
    { type: 'deposit', amount: 1000 },
    { type: 'withdraw', amount: 500 },
    { type: 'deposit', amount: 2000 },
    { type: 'withdraw', amount: 300 },
    { type: 'deposit', amount: 1500 }
]
// Use .reduce() to calculate the final balance. Start with 0. Add for deposits, subtract for withdrawals. Expected output: 3700
const balance = transactions.reduce((acc, curr) => {
    if (curr.type == 'deposit') {
        acc = acc + curr.amount
    } else if (curr.type == 'withdraw') {
        acc = acc - curr.amount
    }
    return acc
}, 0)
console.log(balance);

// Q24. You have this array:

const words = ['hello', 'world', 'this', 'is', 'javascript']
// Use .reduce() to find the longest word. Expected output: "javascript"
const long = words.reduce((acc, curr) => {
    if (curr.length > acc.length) {
        acc = curr
    } return acc
}, '')
console.log(long);

// Q25. You have this array:

const students = [
    { name: 'Alice', subjects: ['Math', 'Science'] },
    { name: 'Bob', subjects: ['English', 'Math'] },
    { name: 'Charlie', subjects: ['Science', 'History'] }
]
// Use .reduce() to get all unique subjects in a single array. Expected output: ['Math', 'Science', 'English', 'History']

// Hint: You'll need to check if subject already exists before adding it.

// Q26. You have this array:

const nums2 = [5, 10, 15, 20, 25, 30]
// Use .reduce() to create an object where keys are the numbers and values are whether they're divisible by 10. Expected output:
// {
//   5: false,
//   10: true,
//   15: false,
//   20: true,
//   25: false,
//   30: true
// }

const keys = nums2.reduce((acc, curr) => {

    acc[curr] = curr % 10 == 0
    return acc

}, {})
console.log(keys);


// Q27. You have this array:

const employees = [
    { name: 'John', department: 'Engineering', salary: 80000 },
    { name: 'Jane', department: 'Design', salary: 70000 },
    { name: 'Mark', department: 'Engineering', salary: 90000 },
    { name: 'Sara', department: 'HR', salary: 60000 },
    { name: 'Tom', department: 'Engineering', salary: 85000 }
]
// Use .reduce() to calculate the total salary expense per department. Expected output:
// {
//   Engineering: 255000,
//   Design: 70000,
//   HR: 60000
// }

const expense = employees.reduce((acc, curr) => {
    if (acc[curr.department] == undefined) {
        acc[curr.department] = 0
    }
    acc[curr.department] = acc[curr.department] + curr.salary
    return acc
}, {})
console.log(expense);

// Q28. You have this array:

const votes = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob', 'Alice', 'Charlie', 'Alice']
// Use .reduce() to count votes and find the winner (person with most votes). First create vote count object, then find the max. Expected output: "Alice" (with 4 votes)

const max = votes.reduce((acc, curr) => {
    if (acc[curr] == undefined) {
        acc[curr] = 0
    }
    acc[curr] = acc[curr] + 1
    return acc
}, {})
const winner = Object.keys(max).reduce((acc, curr) => {
    if (max[acc] > max[curr]) {
        return acc
    } return curr
})
console.log(winner);

// Q29. You have this array:

const products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 3, name: 'Tablet', price: 30000 }
]
// Use .reduce() to convert this array into an object where product id is the key. Expected output:

// {
//   1: { id: 1, name: 'Laptop', price: 50000 },
//   2: { id: 2, name: 'Phone', price: 20000 },
//   3: { id: 3, name: 'Tablet', price: 30000 }
// }

const idli = products.reduce((acc, curr)=>{
    if(acc[curr] == undefined){
        acc[curr.id] = curr
    }return acc
},{})
console.log(idli);

// Q30. FINAL CHALLENGE: You have this array:

const orders = [
    { userId: 1, items: [{ price: 100 }, { price: 200 }] },
    { userId: 2, items: [{ price: 150 }] },
    { userId: 1, items: [{ price: 300 }] },
    { userId: 3, items: [{ price: 250 }, { price: 100 }] },
    { userId: 2, items: [{ price: 200 }, { price: 150 }] }
]
// Do the following using .reduce():

// Group orders by userId
// For each user, calculate their total spending (sum of all item prices across all their orders)
// Expected output:

// {
//   1: 600,   // (100 + 200 + 300)
//   2: 500,   // (150 + 200 + 150)
//   3: 350    // (250 + 100)
// }

const final = orders.reduce((acc, curr) => {

    if (acc[curr.userId] == undefined) {
        acc[curr.userId] = 0
    }

    const Total = curr.items.reduce((sum, item) => {
        return sum + item.price
    }, 0)

    
    acc[curr.userId] = acc[curr.userId] + Total

    return acc
}, {})

console.log(final);
