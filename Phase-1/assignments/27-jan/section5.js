// Section 5: Template Literals

// Q39. Predict the output.

let a = 20
let b = 50
let max

if (a > b) {
    max = a
} else {
    max = b
}

console.log(`Max value is: ${max}`)//MAX


// Q40. Use template literals to print name and age.
let name1 = "omer"
let age5 = 25
console.log(`My name is ${name1} and I am ${age5} years old`);

// Q41. Predict the output.

let price3 = 5000
let discount2 = 20

console.log(`Price: ${price3}, Discount: ${discount2}%, Final: ${price3 - (price3 * discount2 / 100)}`) //Price: 5000, Discount: 20%, Final: 4000


// Q42. Create a shopping cart calculator using template literals.
let item1 = "Laptop"
let price5 = 50000
let quantity = 2
console.log(`Item: ${item1}, Price: ${price5}, Quantity: ${quantity}, Total: ${price5 * quantity}`);

// Q43. Explain the difference between method 1 and method 2.
//method 1 is string concatenation and the method 2 is template literal
