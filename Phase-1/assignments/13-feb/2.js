// Level 2 - Intermediate (Questions 16-28)
// Q16. You have this array:

const words = ['JavaScript', 'is', 'awesome'];
// Use .join() to create:

// "JavaScript is awesome" (space separator)
// "JavaScript-is-awesome" (dash separator)
// "JavaScriptisawesome" (no separator)
console.log(words.join(' '));
console.log(words.join('-'));
console.log(words.join(''));

// Q17. You have this string:

const csv = "John,Doe,30,john@example.com";
// Use .split() to convert it into an array. Expected output: ['John', 'Doe', '30', 'john@example.com']
console.log(csv.split(','));

// Q18. You have this array:

const nums = [1, 2, 3, 4, 5];
// Use .reverse() to reverse it. Does .reverse() mutate the original array? Write your answer as a comment.
console.log(nums.reverse());
console.log(nums);
// it does mutate the original array 

// Q19. You have this string:

const str = "JavaScript";
// Reverse the string using .split(), .reverse(), and .join(). Expected output: "tpircSavaJ"
const reversed = str.split('').reverse().join('')
console.log(reversed);

// Q20. You have this array:

const words1 = ['zebra', 'apple', 'mango', 'banana'];
// Use .sort() to sort alphabetically. Expected output: ['apple', 'banana', 'mango', 'zebra']
console.log(words1.sort());


// Q21. You have this array:

const nums1 = [100, 5, 20, 10, 1000];
// Sort it in ascending order (smallest to largest) using .sort() with a compare function. Expected output: [5, 10, 20, 100, 1000]
console.log(nums1.sort((a, b) => {
    return a - b
}));

// Q22. Using the same array from Q21, sort it in descending order (largest to smallest). Expected output: [1000, 100, 20, 10, 5]

console.log(nums1.sort((a, b) => {
    return b - a
}));


// Q23. You have this array:

const users = [
    { name: 'Charlie', age: 35 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];
// Sort by age in ascending order using .sort(). Expected output: Alice (25), Bob (30), Charlie (35)

console.log(users.sort((a, b) => {
    return a.age - b.age;
}));

// Q24. Using the same users array from Q23, sort by name alphabetically. Use .localeCompare() for string comparison.

// Q25. You have this nested array:

const nested = [1, [2, 3], [4, [5, 6]]];
// Use .flat() with depth 2 to flatten it. Expected output: [1, 2, 3, 4, 5, 6]

console.log(nested.flat(Infinity));

// Q26. You have this array:

const arr = [1, 2, 3, 4, 5];
// Use .fill() to replace indices 1 to 3 (not including 3) with 0. Expected output: [1, 0, 0, 4, 5]
console.log(arr.fill(0, 1, 3));

// Q27. You have this array:

const fruits = ['apple', 'banana', 'orange', 'grape'];
// Use .at() to:

// Get the first element
// Get the last element (using negative index)
// Get the second to last element
console.log(fruits.at(0));
console.log(fruits.at(-1));
console.log(fruits.at(-2));

// Q28. You have this array:

const nums2 = [1, 2, [3, [4, [5]]]];
// Use .toString() to convert it to a string. What happens to the nested arrays?
console.log(nums2.toString());
