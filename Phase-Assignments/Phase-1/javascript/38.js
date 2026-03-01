// / Q No : 38
// / Question: 38. What is the difference between function declaration, function
// expression, and arrow function?

// A function declaration is written using the function keyword with a name.
function greet1() {
  console.log("Hello");
}

// A function expression is when a function is stored inside a variable.
const greet2 = function () {
  console.log("Hello");
};

// An arrow function is a shorter way to write a function.
const greet3 = () => {
  console.log("Hello");
};