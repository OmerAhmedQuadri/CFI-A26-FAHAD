// ARRAYS

let a1 = ["a", 1]
console.log(a);
console.log(typeof a);

let b = [1, 2, null, "hello"]
console.log(b[0]);
console.log(b[3]);

b[0] = "change"
console.log(b[0]);

let c = ['hello', 1, 2, null]
console.log(c);
c.push(8)
console.log(c);

c.pop()
console.log(c);

let d = [1, 2, 3, 4, 5]
console.log(d);
console.log(d.length);

d[d.length] = 6 //can be used to push any element at the end just like push
console.log(d);

d[d.length - 1] = 7 //replaces an element in the list from the end just like pop
console.log(d);

let e = [1, 2, 3, 4, 5]

let removedelement = e.shift()
console.log(e);
console.log(removedelement);

e.unshift('fahad') // adds an element at the start of the list
console.log(e);

console.log(e.unshift('hello')); // if used in clg it prints the length and adds an element at the start of the list
console.log(e);

let fruits = ['apple', 'mango', 'guava']
let vegs = ['tomato', 'carrot', 'potato']

let basket = [fruits, vegs]
console.log(basket);//prints all the elements of both the variables
console.log(basket.length);//prints the length of only the basket arraya
console.log(basket[0]);//prints all the elements of only the first variable
console.log(basket[0][1]);//prints the second [1] element of the first variable[0]
console.log(basket[0].length);//prints the length of the first variable
console.log(basket[0][1].length);//prints the length of the 'mango' string which is 5

console.log(basket.flat());
console.log(basket);
let flatbasket = basket.flat()
console.log(flatbasket);

let arr = [10, 'fahad', ['apple', 'banana']]
console.log(arr);
console.log(arr[2]);
console.log(arr[2][1]);


let students = [
    ['name', 'age', 'address'],
    ['fahad', 21, 'tolichowki'],
    ['taha', 22, 'bahadurpura'],
    ['abdurahman', 22, 'malakpet']
]
console.table(students);
console.log(students[0][1]);

let a = [10, 20, 30]
let b = a

a.push(100)
console.log(a);
console.log(b);

let abc1 = [100, 200, 300]
let abc2 = [...abc1] //... is a spread operator

abc1[0] = 101

console.log(abc1);
console.log(abc2);