/* SYNTAX
if(condtion){
    some lines of code to be executed if true
}else{
    some lines of code to be executed if false
}
*/

// //SIMPLE IF STATEMENTS
// let num = 199
// if (num > 30) {
//     console.log('number is greater than 30');
// }

// let num2 = 20
// if (true) {
//     console.log('hello world');
// }

// let num3 = 20
// if (true) console.log('hello world');
// console.log('rest of the code');


//if else
let int = 200
if (int > 10) {
    console.log("given number is greater than 10");
} else {
    console.log("given number is less than 10");
}

let int2 = 2
if (int2 > 10) {
    console.log("given number is greater than 10");
} else {
    console.log("given number is less than or equals 10");
}

let name1 = 'fahad'
if (name1 == 'fahad') {
    console.log("hii,fahad");
} else {
    console.log("hii,who is this");
}

//scope
if (true) {
    console.log("the condition is true");
    let name = 'fahad'
    console.log(name);
}

let username = 'fahadnawazii'
if (true) {
    console.log(username);
    console.log('condition is true');
}

let int1 = 10
if (true) {
    let int1 = 100
    console.log(int1);
}
console.log(int1);


let int4 = 200
if (true) {
    let int1 = int4
    console.log(int1);
}
console.log(int4);


{
    var a = 10//var is not blocked scope it is global scope
}
console.log(a);


