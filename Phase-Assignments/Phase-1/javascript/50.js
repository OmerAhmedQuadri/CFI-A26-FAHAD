// / Q No : 50
// / Question: 50. Write a program to generate 10 random numbers in an Array (ranging
// from 1 to 100). After generating the 10 random numbers, find the Mean,
// Mode, and Median values of those Array elements.

let arr = []

for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 100) + 1
}
console.log(arr);

let sum = 0

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
}
let mean = sum / arr.length
console.log(`mean: ${mean}`);

let mode = arr[0]
let maxcount = 1
for (let i = 0; i < arr.length; i++) {
    let count = 1
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++
        }
    }
    if (count > maxcount) {
        maxcount = count
        mode = arr[i]
    }
}

if (maxcount == 1) {
    console.log('ALL ELEMENTS APPEARED ONLY ONCE');
} else {
    console.log(`mode: ${mode}`);
}


arr.sort()
let n = arr.length / 2
let median = (arr[(n - 1)] + arr[n]) / 2
console.log(`median: ${median}`);

// / Expected Output: <write expected output>
// [
//   75, 75, 30,  9, 11,
//   56, 69, 74, 47,  4
// ]
// mean: 45
// mode: 75
// median: 62.5
