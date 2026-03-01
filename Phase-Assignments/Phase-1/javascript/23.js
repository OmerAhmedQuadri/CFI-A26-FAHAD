// / Q No : 23
// // / Question: 23. Write a function that checks if a given number is a prime number.

function prime(num) {

    for (let i = 2; i < num; i++) {
        if (num % i == 0){
            return false
        }
    }
    return true
}
console.log(prime(7));

// // / Expected Output: <write expected output></write>
// true