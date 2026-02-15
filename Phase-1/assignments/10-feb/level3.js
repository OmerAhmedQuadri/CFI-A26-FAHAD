// Level 3 - Challenge (Questions 21-30)
// Q21. You have this array:

const cart = [
    { product: 'Shirt', price: 500, qty: 2 },
    { product: 'Pants', price: 1200, qty: 1 },
    { product: 'Shoes', price: 2000, qty: 1 },
    { product: 'Cap', price: 300, qty: 3 }
]
// Use .map() to add a total property to each item (price * qty).

const total = cart.map((ele) => {
    return ele.price * ele.qty
})
console.log(total);

// Q22.Using the same cart array from Q21, use.filter() to return only items where the total(price × qty) is greater than 1000.
const great = cart.filter((ele) => {
    if (ele.price * ele.qty > 1000) {
        return true
    }
})
console.log(great);

// Q23. You have this array:

const users = [
    { name: 'Alice', age: 17, country: 'India' },
    { name: 'Bob', age: 22, country: 'USA' },
    { name: 'Charlie', age: 15, country: 'India' },
    { name: 'David', age: 25, country: 'India' },
    { name: 'Eve', age: 19, country: 'USA' }
]
// Filter only users who are from India AND are 18 or older.

const ind = users.filter((ele) => {
    if (ele.age >= 18 && ele.country == 'India') {
        return true
    }
})
console.log(ind);

// Q24. Using the same users array from Q23, use .map() after filtering to return only their names. Expected output: ['David']

const names = ind.map((ele) => {
    return ele.name
})
console.log(names);

// Q25. You have this array:

const sentences = ['hello world', 'i love javascript', 'coding is fun']
// Use .map() to return each sentence in title case (first letter of each word capitalized). Expected output: ['Hello World', 'I Love Javascript', 'Coding Is Fun']

// Q26. You have this array:

const data = [1, 'two', 3, 'four', 5, 'six', 7]
// Use .filter() to return only numbers (hint: use typeof). Expected output: [1, 3, 5, 7]

const nums = data.filter((ele) => {
    if (typeof ele == 'number') {
        return true
    }
})
console.log(nums);

// Q27. You have this array of objects:

const employees = [
    { name: 'John', department: 'Engineering', salary: 80000 },
    { name: 'Jane', department: 'Design', salary: 70000 },
    { name: 'Mark', department: 'Engineering', salary: 90000 },
    { name: 'Sara', department: 'HR', salary: 60000 },
    { name: 'Tom', department: 'Engineering', salary: 85000 }
]
// Filter only Engineering department employees, then use .map() to give them all a 10% salary raise.

const depart = employees.filter((ele) => {
    if (ele.department == 'Engineering') {
        return true
    }
}).map((ele) => {
    return ele.salary * 1.10
})
console.log(depart);

// Q28. Using the same employees array from Q27, use .forEach() to print a message for each employee:

employees.forEach((ele) => {
    console.log(`${ele.name} works in ${ele.department} and earns ${ele.salary}`);
})

// John works in Engineering and earns 80000
// Jane works in Design and earns 70000
// ...

// Q29. You have this array:

const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Without using .filter(), replicate the behavior of .filter() using .map(). Return the even numbers but use only .map(). What problem do you notice with this approach? Write your observation as a comment.
const even = nums1.map((ele) => {
    if (ele % 2 == 0) {
        return ele
    }
})
console.log(even);

//the problem i notice is that it returns undefined on odd numbers

// Q30. You have this array:

const products = [
    { name: 'Laptop', price: 50000, inStock: true },
    { name: 'Phone', price: 20000, inStock: false },
    { name: 'Tablet', price: 30000, inStock: true },
    { name: 'Watch', price: 5000, inStock: false },
    { name: 'Headphones', price: 3000, inStock: true }
]
// Final Challenge: Do all three of the following in one chain:

// Filter only products that are inStock
// Apply a 10% discount to their prices using .map()
// Use .forEach() to print: Laptop is available for ₹45000
products.filter((ele) => {
    if (ele.inStock == true) {
        return true
    }
}).map((ele) => {
    return {
        name: ele.name,
        price: ele.price * 0.90,
        inStock: ele.inStock
    }
}).forEach((ele) => {
    console.log(`${ele.name} is available for ₹${ele.price}`)
});

