// / Q No : 21
// // / Question: 21. Write a function that finds the maximum of three numbers

function max(a, b, c) {
    if (a > b && a > c) {
        console.log(`${a} is the max`);
    }
    else if (b > a && b > c) {
        console.log(`${b} is the max`);
    }
    else if (c > b && c > a) {
        console.log(`${c} is the max`);
    }
}

max(1, 2, 3)
// // / Expected Output: <write expected output></write>
// 3 is the max