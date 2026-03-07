let rows = 4
let cols = 3
let matrix = []
let num = 1
for (let i = 1; i <= rows; i++) {
    let arr = []
    for (let j = 1; j <= cols; j++) {
        arr.push(num++)
    }
    matrix.push(arr)
}
console.log(matrix);
// let rows = 4
// let cols = 3
// let matrix = []
// let j = 1
// for (let i = 1; i <= rows; i++) {
//     let arr = []
//     for (j; j <= cols; j++) {
//         arr.push(j)
//     }
//     cols = cols + 3
//     matrix.push(arr)
// }
// console.log(matrix);