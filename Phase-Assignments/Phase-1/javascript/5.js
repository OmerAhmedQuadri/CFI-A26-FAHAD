// / Q No : 01
// / Question: 5. Write a program to print numbers from 1 to 30 but skips multiples of 3
// using continue.
// Ex:
// 1 2 4 5 7 8 10 11 13 .29

for (let i = 1; i < 30; i++) {
    if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}

// / Expected Output: <write expected output></write>
