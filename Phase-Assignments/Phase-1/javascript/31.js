// / Q No : 31
// / Question: 31. What is the difference between null and undefined in JavaScript? Give
// examples of when each occurs naturally.


// undefined means a variable exists, but no value has been given to it yet.If you declare a variable and do not assign anything, JavaScript sets it to undefined
let x;
console.log(x); // undefined

// null means no value on purpose. It is something you assign yourself to show that a variable is intentionally empty. JavaScript does not usually assign null by itself.
let y = null;
console.log(y); //null