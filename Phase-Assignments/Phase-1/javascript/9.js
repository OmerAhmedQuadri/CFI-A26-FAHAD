// / Q No : 09
// / Question: 9. Write a function minOf(arr) that takes an array of numbers and returns
// the smallest number in the array

let arr = [1,2,3,4,5]

function minOf(arr) {
    let smallest = arr[0]
    for (let i = 0; i < arr.length; i++){
        if(smallest > arr[i]){
            smallest = arr[i]
        }
    }
    return smallest
}

console.log(minOf(arr));


// / Expected Output: <write expected output></write>
// 1