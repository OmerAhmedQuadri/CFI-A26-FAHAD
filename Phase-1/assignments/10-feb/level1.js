// Level 1 - Basics (Questions 1-10)
// Q1. You have this array:

const nums = [1, 2, 3, 4, 5]
// Use .map() to return a new array where every number is multiplied by 3. Expected output: [3, 6, 9, 12, 15]

const newArray = nums.map((ele) => {
    return ele * 3
})
console.log(newArray);

// Q2. You have this array:

const nums1 = [10, 20, 30, 40, 50]
// Use .map() to return a new array where every number is divided by 10. Expected output: [1, 2, 3, 4, 5]
const newArray1 = nums1.map((ele) => {
    return ele / 10
})
console.log(newArray1);

// Q3. You have this array:

const words = ['hello', 'world', 'javascript']
// Use .map() to return a new array where every word is in UPPERCASE. Expected output: ['HELLO', 'WORLD', 'JAVASCRIPT']
const newWords = words.map((ele) => {
    return ele.toUpperCase()
})
console.log(newWords);

// Q4. You have this array:

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Use .filter() to return only the odd numbers. Expected output: [1, 3, 5, 7, 9]
const odd = nums2.filter((ele) => {
    if (ele % 2 == 1) {
        return ele
    }
})
console.log(odd);

// Q5. You have this array:

const nums3 = [5, 12, 3, 18, 25, 7, 30]
// Use .filter() to return only numbers greater than 10. Expected output: [12, 18, 25, 30]
const greater = nums3.filter((ele) => {
    if (ele > 10) {
        return ele
    }
})
console.log(greater);

// Q6. You have this array:

const names = ['Ali', 'Bob', 'Sam', 'John', 'Jo']
// Use .filter() to return only names that have more than 3 characters. Expected output: ['John']
const four = names.filter((ele) => {
    if (ele.length > 3) {
        return ele
    }
})
console.log(four);

// Q7. You have this array:

const nums4 = [1, 2, 3, 4, 5]
// Use .forEach() to print every number multiplied by 5. What is the return value of .forEach()? Write your answer as a comment.
const five = nums4.forEach((ele) => {
    console.log(ele * 5);
})
console.log(five);


// Q8. What is the difference between .map() and .forEach()? Write your answer as comments in code. Then prove it with an example.


// Q9. You have this object:

const student = {
    name: 'Rahul',
    age: 22,
    city: 'Mumbai',
    course: 'Fullstack'
}
// Use Object.keys() to print all the keys. Use Object.values() to print all the values.
console.log(Object.keys(student));
console.log(Object.values(student));

// Q10. You have this array:

const nums5 = [1, 2, 3, 4, 5]
// Without using .map(), write a regular for loop that does the same thing as:
// nums.map(n => n * 2)
for (let i = 0; i < nums5.length; i++) {
    nums5[i] * 2
}


