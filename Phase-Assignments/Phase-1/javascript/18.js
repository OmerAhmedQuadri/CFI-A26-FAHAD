// / Q No : 018
// / Question:18. Use .filter() and return only positive elements in the array
// Ex: [10, -20, 30, 40, -1] -> [10, 30, 40]

let arr = [10, -20, 30, 40, -1]
let arr1 = arr.filter((ele) =>
    (ele > 0)
)
console.log(arr1);

// / Expected Output: <write expected output></write>
// [ 10, 30, 40 ]