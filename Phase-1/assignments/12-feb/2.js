// Level 2 - Intermediate (Questions 11-20)
// Q11. You have this array:

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'grape']
// // Use .reduce() to count the occurrences of each fruit. Return an object like:
// // { apple: 3, banana: 2, orange: 1, grape: 1 }
// const countfruit = fruits.reduce((acc, curr) => {
//     if (!(acc[curr])) {
//         acc[curr] = 1
//     } else {
//         acc[curr]++
//     }
// }, {})
// console.log(countfruit);


// Q12. You have this array:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Use .reduce() to create two arrays: one with even numbers and one with odd numbers. Return an object:

// { even: [2, 4, 6, 8, 10], odd: [1, 3, 5, 7, 9] }
const evenodd = numbers.reduce((acc, curr) => {
    if (curr % 2 == 0) {
        acc.even.push(curr)
    } else {
        acc.odd.push(curr)
    } return acc
}, { even: [], odd: [] })
console.log(evenodd);

// Q13. You have this array:

const students = [
    { name: 'Alice', marks: 85 },
    { name: 'Bob', marks: 45 },
    { name: 'Charlie', marks: 75 },
    { name: 'David', marks: 92 }
]
// Use .reduce() to find the average marks of all students. Expected output: 74.25
const avg = students.reduce((acc, curr) => acc + curr.marks, 0) / students.length;
console.log(avg);

// Q14. Using the same students array from Q13, use .reduce() to find the student with the highest marks. Expected output: { name: 'David', marks: 92 }

const highest = students.reduce((acc, curr) => {
    if (acc.marks < curr.marks) {
        acc.marks = curr.marks
    }
    return acc
}, students[0])
console.log(highest);


// Q15. You have this array:

const cart = [
    { product: 'Shirt', price: 500, qty: 2 },
    { product: 'Pants', price: 1200, qty: 1 },
    { product: 'Shoes', price: 2000, qty: 1 },
    { product: 'Cap', price: 300, qty: 3 }
]
// Use .reduce() to calculate the total cart value (price × qty for all items). Expected output: 5200

const total = cart.reduce((acc, curr) => {
    return acc + (curr.price * curr.qty)
}, 0)

console.log(total);

// Q16. You have this array:

const users = [
    { name: 'Alice', age: 25, city: 'Mumbai' },
    { name: 'Bob', age: 30, city: 'Delhi' },
    { name: 'Charlie', age: 25, city: 'Mumbai' },
    { name: 'David', age: 30, city: 'Mumbai' }
]
// Use .reduce() to group users by city. Return an object like:

// {
//   Mumbai: [{ name: 'Alice', ... }, { name: 'Charlie', ... }, { name: 'David', ... }],
//   Delhi: [{ name: 'Bob', ... }]
// }

const group = users.reduce((acc, curr) => {
    if (acc[curr.city] == undefined) {
        acc[curr.city] = []
    }
    acc[curr.city].push(curr)

    return acc
}, {})
console.log(group);

// Q17. You have this array:

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
// Use .find() to find the first word that has more than 6 characters. Expected output: "exuberant"

const first = words.find((ele)=>{
    if(ele.length>6){
        return true
    }
})
console.log(first);

// Q18. You have this array:

const products = [
    { id: 1, name: 'Laptop', inStock: false },
    { id: 2, name: 'Phone', inStock: true },
    { id: 3, name: 'Tablet', inStock: true }
]
// Use .find() to find the first product that is in stock. Expected output: { id: 2, name: 'Phone', inStock: true }

const stock = products.find((ele)=>{
    if(ele.inStock == true){
        return true
    }
})
console.log(stock);

// Q19. Using the same products array from Q18, use .findIndex() to find the index of the product with id 3. Expected output: 2

const index = products.findIndex((ele)=>{
    if(ele.id == 3){
        return true
    }
})
console.log(index);


// Q20. You have this array:

const nums = [3, 7, 12, 5, 8, 15, 20]
// Use .findIndex() to find the index of the first number divisible by 5. Expected output: 3 (value 5 is at index 3)

const div = nums.findIndex((ele)=>{
    if(ele%5==0){
        return true
    }
})
console.log(div);