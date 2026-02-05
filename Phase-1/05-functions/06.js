function sayHello() {
    console.log('Hello World');
    return 'hello'
}

let str = sayHello()
console.log(str);

function isEven(num) {
    if (num % 2 == 0) return true
    return false
}

console.log(isEven(55));