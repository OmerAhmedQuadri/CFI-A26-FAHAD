// / Q No : 019
// // / Question: 19. Write a program that prints all numbers from 1 to 50 and prints
// "Fizz" if the number is divisible by 3, "Buzz" if the number is divisible
// by 5, and "FizzBuzz" for both.
// Example:
// ➔ 1
// ➔ 2
// ➔ 3 Fizz
// ➔ 4
// ➔ 5 Buzz
// ➔ 6 Fizz
// ➔ .
// ➔ .
// ➔ 15 FizzBuzz
// ➔ 16

for (let i = 0; i <= 50; i++) {
    if (i % 3 != 0 && i % 5 !== 0) {
        console.log(i);
    }
    else if (i % 3 == 0 && i % 5 != 0) {
        console.log(`${i} fizz`);
    }
    else if (i % 5 == 0 && i % 3 != 0) {
        console.log(`${i} buzz`);
    }
    else if (i % 5 == 0 && i % 3 == 0) {
        console.log(`${i} fizzbuzz`);
    }
}

// // / Expected Output: <write expected output></write>