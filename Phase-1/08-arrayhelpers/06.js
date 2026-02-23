let arr = [22, 55, 1, 76, 9, 10, 32, 0]

let a = arr.filter((e) => {
    if (e % 2 == 0) {
        return e
    }
})
console.log(a);


let newArr = arr.filter((val) => {
    if (val <= 10) return true
})
console.log(newArr)