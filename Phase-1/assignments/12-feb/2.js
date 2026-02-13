// Level 2 - Intermediate (Questions 11-20)
// Q11. You have this array:

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'grape']
// Use .reduce() to count the occurrences of each fruit. Return an object like:
// { apple: 3, banana: 2, orange: 1, grape: 1 }
const countfruit = fruits.reduce((acc, curr) => {
    if (!(acc[curr])) {
        acc[curr] = 1
    } else {
        acc[curr]++
    }
}, {})
console.log(countfruit);