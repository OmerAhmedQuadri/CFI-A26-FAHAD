//write a program to create a function that takes n and prints numbers from 1 to 10

function count(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}


let count = function (n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
count(10)

// function count() {
//     console.log("this is first declaration");
// }

// count()

// function count() {
//     console.log("second");
// }

// count()