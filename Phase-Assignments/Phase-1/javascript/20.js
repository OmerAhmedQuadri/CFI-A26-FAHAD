// / Q No : 20
// // / Question: 20. Create a simple timer app using setInterval() that counts down from 5
// to 0, then prints "Time’s up!".

let i = 5
let id = setInterval(() => {
    console.log(i)
    if (i == 0) {
        console.log("times up!")
        clearInterval(id)
    }

    i--
}, 1000)

// // / Expected Output: <write expected output></write>
// 5
// 4
// 3
// 2
// 1
// 0
// times up!