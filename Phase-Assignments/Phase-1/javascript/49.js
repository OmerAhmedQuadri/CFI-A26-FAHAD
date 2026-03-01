// / Q No : 49
// / Question: 49. Write a program to find the largest and the smallest number in an
// array (both with and without sorting).
// Ex: [3, 1, 9, 4, 7] → 1, 9

let arr = [3, 1, 9, 4, 7]
let largest = arr[0]
let smallest = arr[0]

for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i]
    }
    if (smallest > arr[i]) {
        smallest = arr[i]
    }
}
console.log(largest);
console.log(smallest);

let arr2 = [3, 1, 9, 4, 7]
arr2.sort()
let largest2 = arr2[arr2.length - 1]
let smallest2 = arr2[0]
console.log(largest2);
console.log(smallest2);

// / Expected Output: <write expected output>
