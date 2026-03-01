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

for (let i = 1; i <= 50; i++) {
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

// / Expected Output: <write expected output></write>
// 1
// 2
// 3 fizz
// 4
// 5 buzz
// 6 fizz
// 7
// 8
// 9 fizz
// 10 buzz
// 11
// 12 fizz
// 13
// 14
// 15 fizzbuzz
// 16
// 17
// 18 fizz
// 19
// 20 buzz
// 21 fizz
// 22
// 23
// 24 fizz
// 25 buzz
// 26
// 27 fizz
// 28
// 29
// 30 fizzbuzz
// 31
// 32
// 33 fizz
// 34
// 35 buzz
// 36 fizz
// 37
// 38
// 39 fizz
// 40 buzz
// 41
// 42 fizz
// 43
// 44
// 45 fizzbuzz
// 46
// 47
// 48 fizz
// 49
// 50 buzz