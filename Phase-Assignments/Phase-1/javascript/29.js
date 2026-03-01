// / Q No : 29
// // / Question: 29. Write a program that uses Object.keys(), Object.values(),
// Object.entries() and prints each.

const student = {
  name: "Fahad",
  age: 21,
  course: "CSE"
};

console.log("Object.keys():");
console.log(Object.keys(student));

console.log("Object.values():");
console.log(Object.values(student));

console.log("Object.entries():");
console.log(Object.entries(student));

// // / Expected Output: <write expected output></write>
// Object.keys():
// [ 'name', 'age', 'course' ]
// Object.values():
// [ 'Fahad', 21, 'CSE' ]
// Object.entries():
// [ [ 'name', 'Fahad' ], [ 'age', 21 ], [ 'course', 'CSE' ] ]