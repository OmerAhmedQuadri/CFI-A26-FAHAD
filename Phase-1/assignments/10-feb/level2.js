// Level 2 - Intermediate (Questions 11-20)
// Q11. You have this array:

const prices = [100, 200, 350, 400, 150]
// Use .map() to apply an 18% GST to every price and return a new array with prices rounded to 2 decimal places.
const taxedPrices = prices.map(price => {
    return Math.floor((price * 1.18) * 100) / 100
})
console.log(taxedPrices);


// Q12. You have this array:

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Chain .filter() and .map() together. First filter even numbers, then double them. Expected output: [4, 8, 12, 16, 20]

const newArr = nums
    .filter((ele) => {
        if (ele % 2 == 0) {
            return true
        }
    })
    .map((ele) => {
        return ele * 2
    })
console.log(newArr);

// Q13. You have this array of objects:

const students = [
    { name: 'Alice', marks: 85 },
    { name: 'Bob', marks: 42 },
    { name: 'Charlie', marks: 76 },
    { name: 'David', marks: 35 },
    { name: 'Eve', marks: 90 }
]
// Use .filter() to return only students who passed (marks >= 50).

const passed = students.filter((ele) => {
    if (ele.marks >= 50) {
        return true
    }
})
console.log(passed);


// Q14. Using the same students array from Q13, use .map() to return a new array that contains only the names of all students. Expected output: ['Alice', 'Bob', 'Charlie', 'David', 'Eve']

const newArr1 = students.map((ele) => {
    return ele.name
})
console.log(newArr1);

// Q15. Using the same students array from Q13, use .map() to add a new property grade to each student:

// marks >= 80 → grade: 'A'
// marks >= 60 → grade: 'B'
// marks >= 50 → grade: 'C'
// marks < 50 → grade: 'F'


students.map((ele) => {
    if (ele.marks >= 80) {
        return ele.garde = 'A'
    }
    else if (ele.marks >= 60) {
        return ele.grade = 'B'
    }
    else if (ele.marks >= 50) {
        return ele.grade = 'C'
    }
    else if (ele.marks < 50) {
        return ele.grade = 'F'
    }
})
console.log(students);


// Q16. You have this array:

const words = ['cat', 'elephant', 'dog', 'hippopotamus', 'rat']
// Use .filter() to return only words with more than 4 characters, then use .map() to capitalize the first letter of each word. Expected output: ['Elephant', 'Hippopotamus']
const four = words.filter((ele) => {
    if (ele.length > 4) {
        return true
    }
}).map((ele) => {
    ele[0].toUpperCase()
    return ele
})

console.log(four);

// Q17. You have this array:

const emails = ['Alice@Gmail.com', 'BOB@YAHOO.COM', 'charlie@hotmail.COM']
// Use .map() to return all emails in lowercase. Expected output: ['alice@gmail.com', 'bob@yahoo.com', 'charlie@hotmail.com']
const mails = emails.map((ele) => {
    return ele.toLowerCase()
})
console.log(mails);


// Q18. You have this array:

const nums1 = [1, 2, 3, 4, 5]
// Use .map() to return an array of objects like this: Expected output:

// [
//   { value: 1, square: 1 },
//   { value: 2, square: 4 },
//   { value: 3, square: 9 },
//   { value: 4, square: 16 },
//   { value: 5, square: 25 }
// ]

const obj = nums1.map((ele) => {
    return { value: ele, square: ele * ele }
})
console.log(obj);


// Q19. You have this object:

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 28,
    email: 'john@example.com',
    isActive: true
}
// Use Object.keys() and .forEach() together to print every key and its value like:

// firstName: John
// lastName: Doe
// ...
Object.keys(user).forEach(key => {
    console.log(`${key}: ${user[key]}`);
});


// Q20. You have this array:

const nums2 = [-5, -3, 0, 2, 4, -1, 7, -8]
// Use .filter() to return only positive numbers (greater than 0), then use .map() to return their squares.

const posi = nums2.filter((ele) => {
    if (ele > 0) {
        return true
    }
}).map((ele) => {
    return ele ** 2
})
console.log(posi);