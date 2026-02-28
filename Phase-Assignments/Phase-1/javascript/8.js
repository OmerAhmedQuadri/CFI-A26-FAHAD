// / Q No : 08
// / Question: 8. Create a function sumOfArray(arr) that takes an array of numbers and
// returns the sum of the elements of the array.


let arr = [1, 2, 3, 4, 5]
function sumOfArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}
console.log(sumOfArray(arr));



// / Expected Output: <write expected output></write>
// 15