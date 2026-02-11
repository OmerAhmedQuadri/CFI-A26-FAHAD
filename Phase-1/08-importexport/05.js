const arr = [22, 54, 97, 33, 2, 8]

let arr2 = arr.map((ele) => {
    return ele * 2
})

console.log(arr);
console.log(arr2);

let arr3 = arr.map((e, i) => {
    console.log(e, i);
    return e * 2
})
console.log(arr3);



