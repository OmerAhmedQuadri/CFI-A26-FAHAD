// / Q No : 47
// / Question: Write a program to count frequency of each element and store in an
// object.
// Ex: ['a', 'b', 'a', 'c', 'b', 'a'] -> { a: 3, b: 2, c: 1 }


let arr = ['a', 'b', 'a', 'c', 'b', 'a']
let arr2 = arr.reduce((acc, curr) => {

    if (acc[curr] == undefined) {
        acc[curr] = 1
    } else {
        acc[curr]++
    }

    return acc
}, {})
console.log(arr2);

// / Expected Output: <write expected output>
// { a: 3, b: 2, c: 1 }
