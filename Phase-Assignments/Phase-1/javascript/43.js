// / Q No : 43
// / Question: 43. What is the difference between for…of and for…in loops?


// The for…of loop is used when you want to loop over values. Each loop gives you the actual value stored in the array or string.
for (let value of [10, 20, 30]) {
    console.log(value);
}

// The for…in loop is used when you want to loop over keys or property names. It is mainly used with objects. When used on arrays, it gives indexes instead of values,
let user = { name: "Fahad", age: 20 };

for (let key in user) {
    console.log(key);
}