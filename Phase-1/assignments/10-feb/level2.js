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