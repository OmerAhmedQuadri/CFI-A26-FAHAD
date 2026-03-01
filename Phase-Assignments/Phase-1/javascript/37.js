// / Q No : 37
// / Question: 37. What is hoisting? Which declarations are hoisted and how does it work
// with let and const?

// Hoisting is javaScript’s behavior of moving declarations to the top of their scope before the code runs. Variables declared with var are automatically given the value undefined.

// Variables declared with let and const are also hoisted, but they are not initialized. If you try to use them before their declaration, JavaScript throws an error.