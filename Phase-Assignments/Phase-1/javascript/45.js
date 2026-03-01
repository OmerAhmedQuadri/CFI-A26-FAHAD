// / Q No : 45

// Question: 45. How does this keyword behave differently in arrow functions compared
// to normal functions?

// Normal Function
// this keyword depends on how the function is called .if a normal function is called as a method of an object, this refers to that object.

// Arrow Function
// The this keyword in Arrow Functions takes the value of this from the surrounding context where the function was defined, not where it's called.