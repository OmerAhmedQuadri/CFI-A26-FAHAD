let random = Math.random()
let successful = random > 0.5

let myPromise = new Promise((resolve, reject) => {
    if (successful) {
        return resolve("promise is resolved")
    } else {
        return reject("promise rejected")
    }
})
myPromise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})