import readline from 'readline-sync'

// LEVEL 1: Absolute Basics (know your array or leave)

// Create an array and print it
let arr = [1, 2, 3, 4, 5]
console.log(arr);

// Print each element using a loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Print elements in reverse order
let another = []
for (let i = arr.length - 1; i >= 0; i--) {
    another.push(arr[i])

} console.log(another);

// Find array length manually
let count = 0
for (let i = 0; i < arr.length; i++) {
    count++
} console.log(count);//flag

// Access middle element
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
if (arr1.length % 2 == 0) {
    console.log(arr[(arr1.length / 2) - 1], arr[(arr1.length / 2)]);
} else {
    console.log(arr1[Math.floor(arr1.length / 2)]);
}

// Change a specific index value
arr1[4] = 12
console.log(arr1);

// Check if array is empty
let arr2 = []
let isEmpty = true
if (arr2.length !== 0) {
    isEmpty = false
} console.log(isEmpty);

// Copy array to another array
arr2 = arr1
console.log(arr2);

// Print only first element
let arr3 = [1, 2, 3, 4, 5]
console.log(arr3[0]);

// Print only last element
console.log(arr3[arr3.length - 1]);

// Add element at end
arr3.push(4)
console.log(arr3);

// Remove element from end
arr3.pop()
console.log(arr3);

// Add element at start

// Remove element from start
arr3.shift()
console.log(arr3);
// Replace all elements with 0
for (let i = 0; i < arr3.length; i++) {
    arr3[i] = 0
} console.log(arr3);
// Count total elements
let count1 = 0
for (let i = 0; i < arr3.length; i++) {
    count1++
} console.log(count1);
// Print array using for…of

// Print array using for
let arr4 = [1, 2, 3, 4]
for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i])
}
// Print array using while
let i1 = 0
while (i1 < arr4.length) {
    console.log(arr4[i1]);
    i1++
}
// Check if value exists
let value = 6
for (let i = 0; i < arr4.length; i++) {
    if (value == arr[i]) {
        console.log('value does exists in the array');
        break;
    }
}
console.log('value does not exist');
// Count how many times a value appears
let arr5 = [1, 2, 3, 3, 4, 5, 2]
let count2 = 0
let value1 = 3
for (let i = 0; i < arr5.length; i++) {
    if (value1 == arr5[i]) {
        count2++
    }
} console.log(count2);

// Find index of a value manually
// Find last index of a value

// Create array from user input
// let size = readline.questionInt("enter the size of an array: ")
// let arr6 = []
// for (let i = 0; i < size; i++) {
//     arr6.push(readline.questionInt(`enter the ${i} element: `))
// } console.log(arr6);

// Print elements at even indices
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] % 2 == 0) {
        console.log(arr7[i]);
    }
}

// Print elements at odd indices

for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] % 2 !== 0) {
        console.log(arr7[i]);
    }
}

// Sum of all elements
let sum = 0
for (let i = 0; i < arr7.length; i++) {
    sum = sum + arr7[i]
} console.log(sum);

// Product of all elements
let product = 1
for (let i = 0; i < arr7.length; i++) {
    product = product * arr7[i]
} console.log(product);

// Count positive numbers
let arr8 = [-1, -2, 3, 4, -5, 0, 0, 0]
let count3 = 0
for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] > 0) {
        count3++
    }

} console.log(count3);

// Count negative numbers
let count4 = 0
for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] < 0) {
        count4++
    }

} console.log(count4);

// Count zeros
let count5 = 0
for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] == 0) {
        count5++
    }
} console.log(count5);

// Replace negative numbers with 0
for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] < 0) {
        arr8[i] = 0
    }
}
console.log(arr8);

// Find smallest number
let arr9 = [1, 2, 3, 4, 5]
let smallest = arr9[0]
for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] < smallest) {
        smallest = arr9[i]
    }
} console.log(smallest);

// Find largest number
let largest = arr9[0]
for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] > largest) {
        largest = arr9[i]
    }
} console.log(largest);

// Compare two arrays for length
let arr10 = [1, 2, 3];
let arr11 = [4, 5];

if (arr10.length == arr11.length) {
    console.log("Arrays have the same length.");
} else {
    console.log("Arrays have different lengths.");
}

// Check if two arrays are equal
let isEqual = false
if (arr10.length !== arr11.length) {
    console.log(isEqual);
} else {
    isEqual = false
    console.log(isEqual);
}

// Print array elements line by line
for (let i = 0; i < arr10.length; i++) {
    console.log(arr10[i]);
}

// Swap first and last elements
let arr12 = [1, 2, 3]
let last = arr12[arr12.length - 1]
arr12[arr12.length - 1] = arr12[0]
arr12[0] = last
console.log(arr12);

// Print array without commas


// Clone array without reference issues
let arr13 = [1, 2, 3, 4, 5]
let arr14 = [...arr13]
console.log(arr14);

// Print array indices
for (let i = 0; i < arr13.length; i++) {
    console.log(i);
}

// Insert element at specific index


// Delete element from specific index
delete arr13[3]
console.log(arr13);

// Shift elements left by one

// Shift elements right by one

// Convert array to string manually
let arr15 = [1, 2, 3, 4, 5]
let str = ''
for (let i = 0; i < arr15.length; i++) {
    str = str + arr15[i]
}
console.log(str);

// Convert string to array manually

// Count elements greater than x

// Count elements less than x

// Find difference between max and min






