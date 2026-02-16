// Level 1 - Basics (Questions 1-15)
// Q1. You have this array:

const nums = [10, 20, 30, 40, 50, 30, 60];
// Use .indexOf() to find the first occurrence of 30. Expected output: 2
console.log(nums.indexOf(30));

// Q2. Using the same array from Q1, use .indexOf() to find 30 starting from index 3. Expected output: 5

console.log(nums.indexOf(30, 3));

// Q3. You have this array:

const colors = ['red', 'blue', 'green', 'blue', 'yellow'];
// Use .lastIndexOf() to find the last occurrence of 'blue'. Expected output: 3
console.log(colors.lastIndexOf('blue'));

// Q4. You have this array:

const nums1 = [1, 2, NaN, 4, 5];
// Try to find NaN using .indexOf() and .includes(). What's the difference? Write your answer as a comment.
console.log(nums1.indexOf(NaN));
console.log(nums1.includes(NaN));

// indexOf() cannot find NaN, so it returns -1.
// includes() can find NaN, so it returns true.

// Q5. You have this array:

const permissions = ['read', 'write', 'execute'];
const userPermission = 'write';
// Use .includes() to check if the user has the required permission. Print "Access Granted" or "Access Denied".

if (permissions.includes(userPermission)) {
    console.log('access granted');
} else {
    console.log('access denied');
}

// Q6. You have this array:

const nums2 = [2, 4, 6, 8, 10];
// Use .every() to check if all numbers are even. Expected output: true

console.log(nums2.every((ele) => {
    if (ele % 2 == 0) {
        return true
    }
}));

// Q7. You have this array:

const nums3 = [1, 2, 3, 4, 5, 6];
// Use .some() to check if there's at least one number greater than 5. Expected output: true

console.log(nums3.some((ele) => {
    if (ele > 5) {
        return true
    }
}));

// Q8. You have this array:

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 }
];
// Use .every() to check if all users are adults (age >= 18). Expected output: false

console.log(users.every((ele) => {
    if (ele.age >= 18) {
        return true
    } return false
}));

// Q9. Using the same users array from Q8, use .some() to check if there's at least one user under 18. Expected output: true

console.log(users.some((ele) => {
    if (ele.age >= 18) {
        return true
    } return false
}));

// Q10. You have this array:

const stack = [];
// Use .push() to add 'A', 'B', 'C' to the stack. Then use .pop() twice. What's left in the array? What did .pop() return each time?

stack.push('A');
stack.push('B');
stack.push('C');

const firstPop = stack.pop();
const secondPop = stack.pop();

console.log(stack);
console.log(firstPop);
console.log(secondPop);


// Q11. You have this array:

const queue = ['task1', 'task2', 'task3'];
// Use .shift() to remove the first task, then .unshift() to add 'urgent-task' at the beginning. Print the final array.

queue.shift();
queue.unshift('urgent-task');

console.log(queue);


// Q12. You have this array:

const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
// Use .slice() to extract ['banana', 'orange', 'grape']. Expected output: ['banana', 'orange', 'grape']

console.log(fruits.slice(1, 5));

// Q13. Using the same fruits array from Q12, use .slice() with negative indices to get the last 2 fruits. Expected output: ['grape', 'mango']

console.log(fruits.slice(-2));

// Q14. You have this array:

const nums4 = [1, 2, 3, 4, 5];
// Use .splice() to remove elements at index 2 and 3, and insert 99 and 88 in their place. What does .splice() return?

console.log(nums4.splice(2, 2, 99, 88));
console.log(nums4);
//[ 3, 4 ]
// [ 1, 2, 99, 88, 5 ]

// Q15. You have this array:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Use .concat() to combine them. Then do the same using the spread operator .... Are both results the same?
const joint = arr1.concat(arr2)
console.log(joint);

const joined = [...arr1, ...arr2]
console.log(joined);

// both are same

