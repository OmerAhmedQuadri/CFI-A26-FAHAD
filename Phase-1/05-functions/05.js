//write a program that takes 2 numbers and returns their sum

function sum(a, b) {
    return a + b
}
console.log(sum(5, 5));

function sum1(a = 10, b = 10) { //if there are no arguments , it falls to the default value hich is 10 and 10
    return a + b
}
console.log(sum1());