// LEVEL 2: Logic Building (arrays start fighting back)

// Reverse array manually
let arr = [1, 2, 3, 2, 4, 5]
let brr = []
for (let i = 0; i < arr.length; i++) {
    brr.unshift(arr[i])

} console.log(brr);

// Check if array is sorted
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
        console.log('the array is not sorted');
        break;
    }
}

// Sort array ascending (no .sort)
let arr1 = [2, 3, 1, 5, 4]
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        let temp = 0
        if (arr1[j] > arr1[j + 1]) {
            temp = arr1[j]
            arr1[j] = arr1[j + 1]
            arr1[j + 1] = temp
        }
    }
} console.log(arr1);

// Sort array descending


// Find second largest element
let arr2 = [22, 53, 12, 64, 18, 43]
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        let temp = 0
        if (arr2[j] > arr2[j + 1]) {
            temp = arr2[j]
            arr2[j] = arr2[j + 1]
            arr2[j + 1] = temp
        }
    }
}

let secondLargest = arr2[arr2.length - 2]
console.log(arr2)
console.log(secondLargest);

// Find second smallest element
let smallest = arr2[1]
console.log(smallest);


// Remove duplicates
let arr3 = [1, 4, 6, 23, 64, 63, 23, 75, 63, 48, 1, 1, 2, 4]
for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3.length; j++) {
        let temp = 0
        if (arr3[j] > arr3[j + 1]) {
            temp = arr3[j]
            arr3[j] = arr3[j + 1]
            arr3[j + 1] = temp
        }
    }
}
let result = []
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] !== arr3[i + 1]) {
        result.push(arr3[i])
    }
}
console.log(result);

// Find duplicate elements
let duplicates = []
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] == arr3[i + 1]) {
        duplicates.push(arr3[i])
    }
}
console.log(arr3);
console.log(duplicates);
// Count frequency of each element


// Find most frequent element


// Find least frequent element


// Move all zeros to end
let arr4 = [0, 2, 3, 4, 0, 3]
let store = []
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] !== 0) {
        store.push(arr[i])
    }
}
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] == 0) {
        store.push(arr4[i])
    }
}
console.log(store);

// Move all zeros to start
let arr5 = [0, 2, 3, 4, 0, 3]
let store1 = []
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] !== 0) {
        store1.push(arr[i])
    }
}
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] == 0) {
        store1.unshift(arr5[i])
    }
}
console.log(store1);

// Separate even and odd numbers
let arr6 = [1, 2, 3, 4, 5]
let even = []
let odd = []
for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] % 2 == 0) {
        even.push(arr6[i])
    } else {
        odd.push(arr6[i])
    }
}
console.log(even, odd);

// Separate positive and negative numbers
let arr7 = [-1, 2, -4, 3]
let positive = []
let negative = []
for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] < 0) {
        negative.push(arr7[i])
    } else {
        positive.push(arr7[i])
    }
} console.log(positive, negative);

// Rotate array left by 1
let arr8 = [1, 2, 3, 4, 5]
let left = arr8.shift()
arr8.push(left)
console.log(arr8);

// Rotate array right by 1
let arr9 = [1, 2, 3, 4, 5]
let right = arr9.pop()
arr9.unshift(right)
console.log(arr9);

// Rotate array by k positions


// Merge two arrays
let arr10 = [1, 2, 3, 4, 5]
let arr11 = [6, 7, 8, 9, 10]
arr10.push(...arr11)
console.log(arr10);

// Merge two sorted arrays


// Find intersection of two arrays


// Find union of two arrays

// Remove all occurrences of a value

// Replace all occurrences of a value

// Find missing number in sequence

// Find repeating numbers

// Find first non-repeating element

// Find longest increasing subarray

// Find longest decreasing subarray

// Check if array is palindrome

// Count pairs with sum = k

// Two-sum problem

// Find subarray with given sum

// Count subarrays with sum = k

// Find max subarray sum (brute force)

// Find min subarray sum

// Remove element without creating new array

// Insert element without shifting built-ins

// Replace every element with its index

// Replace every element with next greater element

// Check if array contains only unique elements

// Find common elements in 3 arrays

// Remove duplicates while preserving order

// Count distinct elements

// Find smallest missing positive number

// Rearrange array alternately

// Rearrange positives and negatives alternately

// Find equilibrium index

// Check if array can be partitioned equally

// Find peak element