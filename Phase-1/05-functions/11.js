//write a program to calculate the factorial of a given number using recursive function

function factorial(num) {
    if (num <= 1) {
        return 1
    }
    return num * factorial(--num)

}
console.log(factorial(5));