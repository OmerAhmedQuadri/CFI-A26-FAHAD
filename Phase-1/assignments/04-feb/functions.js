// 20 JavaScript Practice Questions
// Basic Functions (Questions 1-5)

// 1. Function with Multiple Returns
// Write a function checkAge(age) that:

function checkAge(age) {
    if (age < 18) {
        return "minor"
    } else if (age >= 18 && age <= 65) {
        return 'Adult'
    } else if (age > 65) {
        return 'senior'
    }
}
console.log(checkAge(24));
// Returns "minor" if age is less than 18
// Returns "adult" if age is between 18 and 65
// Returns "senior" if age is greater than 65



// 2. Function Without Return
// Write a function greetUser(name) that prints "Welcome, [name]!" to the console. What happens if you try to use the return value?

function greetUser(name) {
    console.log('welcome', name);
}
greetUser('fahad')



// 3. Default Parameters
// Write a function multiply(a, b) that multiplies two numbers. If only one number is provided, it should multiply by 10 as default.

function multiply(a = 10, b = 10) {
    return a * b
}

// 4. Function with Validation
// Write a function divide(a, b) that:
// Returns the division result
// Prints an error message and returns undefined if b is 0
// Prints an error message if either parameter is not a number

function divide(a, b) {
    if (b == 0) {
        console.error("enter a non zero number");
        return
    } else if (typeof a !== 'number' || typeof b != 'number') {
        console.error('enter a valid number');
        return
    }
    return a / b

}
console.log(divide(4, "o"))


// 5. Truthy/Falsy Check
// Write a function isValidInput(value) that returns true if the value is truthy (not 0, empty string, null, undefined, false), otherwise returns false.

function isValidInput(value) {
    if (value === 0 || value === '' || value === null || value === false || value === undefined) {
        return false
    }
    return true
}
console.log(isValidInput(undefined));


// Array Operations (Questions 6-10)
// 6. Find Odd Numbers
// Write a function giveOdds(arr) that:
// Takes an array of numbers
// Returns a new array containing only odd numbers
// Returns an empty array if input is not an array

function giveOdds(arr) {
    let odd = []
    if (!(Array.isArray(arr))) {
        return []
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odd.push(arr[i])
        }
    } return odd
}
console.log(giveOdds([1, 2, 3, 4, 5]));


// 7. Count Occurrences
// Write a function countOccurrences(arr, target) that counts how many times target appears in the array.
// Example: countOccurrences([1, 2, 3, 2, 4, 2], 2) should return 3

function countOccurrences(arr, target) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            count++
        }
    } return count
}
console.log(countOccurrences([1, 2, 2, 3, 3, 3, 3, 3, 4, 5, 2], 3));

// 8. Filter by Condition
// Write a function filterGreaterThan(arr, threshold) that returns all numbers in the array greater than the threshold value.

function filterGreaterThan(arr, threshold) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            console.log(arr[i]);
        }
    }
}
filterGreaterThan([1, 2, 3, 4, 5], 3)

// 9. Array Sum with Validation
// Write a function sumArray(arr) that:
// Returns the sum of all numbers in the array
// Returns 0 if array is empty
// Returns undefined with an error message if input is not an array

function sumArray(arr) {
    let sum = 0
    if (!(Array.isArray(arr))) {
        return
    }
    if (arr == []) {
        return 0
    }
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    } return sum
}
console.log(sumArray([1, 2, 3, 4, 5]));


// 10. Find Maximum
// Write a function findMax(arr) that returns the largest number in the array without using Math.max(). Return undefined if array is empty.

function findMax(arr) {
    if (arr == []) {
        return
    }
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    } return largest
}
console.log(findMax([22, 45, 2, 3, 54]));

// Number Analysis (Questions 11-15)
// 11. Perfect Number
// Write a function isPerfect(num) that checks if a number is perfect (a number that equals the sum of its proper positive divisors).

function isPerfect(num) {
    let perfect = true
    let divisor = []
    let sum = 0
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            divisor.push(i)
        }
    }
    for (let i = 0; i < divisor.length; i++) {
        sum = sum + divisor[i]
    }
    if (sum !== num) {
        perfect = false
    }
    return perfect
}
console.log(isPerfect(28));

// Example: 6 is perfect because 1 + 2 + 3 = 6 or 28 is perfect because 1 + 2 + 4  +7 + 14 = 28

// 12. Armstrong Number
// Write a function isArmstrong(num) that checks if a number is an Armstrong number number that equals the sum of its own digits, each raised to the power of the total number of digits).

let num = 153
let arr = []
// let temp = num
let count = 0
let temp2 = 0
while (num) {
    count++
    temp2 = num % 10
    arr.push(temp2)
    num = Math.floor(num / 10)
}

for (let i = 0; i < count; i++) {
    arr[i] = Math.pow(arr[i], count)

}

console.log(new Date("October 13, 2014 11:13:00"));
// Example: 153 is Armstrong because 1³ + 5³ + 3³ = 153

// 13. Find All Primes in Range
// Write a function primesInRange(start, end) that returns an array of all prime numbers between start and end (inclusive).
// function primesInRange(start, range) {
//     let isprime = true
//     let arr = []
//     for (let i = start; i < range; i++) {
//         if ()
//     }
// }

// 14. Sum of Digits
// Write a function sumOfDigits(num) that returns the sum of all digits in a number.

function sumOfDigits(num) {
    let str = '' + num
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        sum = sum + Number(str[i])
    } return sum
}
console.log(sumOfDigits(1234));
// Example: sumOfDigits(1234) should return 10

// 15. Reverse Number
// Write a function reverseNumber(num) that reverses the digits of a number.
function reverseNumber(num) {
    let str = '' + num
    let reverse = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i]
    }
    return Number(reverse)
}
console.log(reverseNumber(1234));
// reverseNumber(1234)
// Example: reverseNumber(1234) should return 4321


// Recursion (Questions 16-20)
// 16. Fibonacci Sequence
// Write a recursive function fibonacci(n) that returns the nth Fibonacci number.


// Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13...

// 17. Sum of Natural Numbers
// Write a recursive function sumNatural(n) that returns the sum of first n natural numbers.
function sumNatural(n) {
    if (n < 0) {
        return 0
    }
    return n + sumNatural(--n)
}
console.log(sumNatural(5))
// Example: sumNatural(5) should return 15 (1+2+3+4+5)

// 18. Power Function
// Write a recursive function power(base, exponent) that calculates base raised to the exponent.
function power(base, exponent) {
    if (exponent == 0) {
        return 1
    }
    return base * power(base, --exponent)
}
console.log(power(2, 3));
// Example: power(2, 3) should return 8

// 19. Count Down
// Write a recursive function countDown(num) that:

function countDown(num) {
    if (num <= 1) {
        return 1
    }
    console.log(num);
    return countDown(--num)
}
console.log(countDown(5));
// Prints numbers from num down to 1
// Stops when it reaches 0
// Does NOT use a loop


// 20. Array Sum (Recursive)
// Write a recursive function sumArrayRecursive(arr, index) that calculates the sum of all elements in an array without using a loop.
function sumArrayRecursive(arr, i = 0) {
    let sum = 0
    if (i < arr.length) {
        return arr[i]
    }
    return sum = sum + sumArrayRecursive(arr, ++i)


}
console.log(sumArrayRecursive([1, 2, 3, 4, 5]));

// Hint: Use index parameter to track position, default it to 0.

// Bonus Challenge:
// 21. Combine Multiple Concepts
// Write a function analyzeArray(arr) that returns an object with:

// {
//     evenCount: number,
//     oddCount: number,
//     primeCount: number,
//     sum: number,
//     average: number,
//     max: number,
//     min: number
// }