// const name = 'anas'
// const marks = 80
// if (name == 'anas') {
//     if (marks > 90) {
//         console.log('anas has passed');
//     }
//     else if (marks > 60) {
//         console.log('anas just passed');
//     }
//     else {
//         console.log('anas has failed');
//     }
// }
// else if (name == 'yash') {
//     if (marks > 90) {
//         console.log('yash has passed');
//     }
//     else if (marks > 60) {
//         console.log('yash just passed');
//     }
//     else {
//         console.log('yash has failed');
//     }
// }

// let a = 20
// let b = 50
// let max;
// if(a>b){
//     max = a
// }else{
//     max = b
// }
// console.log(`max value is ${max}`);//template literal


const price = 5000
let discount = 0

if (price > 1000) {
    discount = 20
} else if (price >= 500) {
    discount = 15
} else {
    discount = 10
}
console.log(`${discount}%`);