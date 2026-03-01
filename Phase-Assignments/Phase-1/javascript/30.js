// / Q No : 30
// // / Question: 30.Write a recursive function to print numbers from 1 to 5.

function print(i) {

    if (i > 5) {
        return;
    }
    console.log(i);
    print(++i)
}

print(1)
// // / Expected Output: <write expected output></write>
// 1
// 2
// 3
// 4
// 5