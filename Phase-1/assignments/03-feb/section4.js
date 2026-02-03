// Section 4: Default Parameters (4 Questions)
// Q23. What will be the output?

function sum(a = 10, b = 20) {
    return a + b
}

console.log(sum(5, 15))
console.log(sum(5))
console.log(sum())
// Your Prediction:
// 20
// 25
// 30

// Explanation: What happens when you don't pass all arguments?
// when we dont provide an argument , the parameters falls back to their default parameter assigned 

// Q24. Create a function greet with default parameter name = 'Guest'. If name is provided, print "Hello [name]", otherwise print "Hello Guest".

function greet(name = 'Guest') {
    console.log('Hello', name);
}

// Test it:
greet('Omer')  // Hello Omer
greet()        // Hello Guest


// Q25. Create a function calculatePrice that takes price and discount = 0 (default). Return the final price after applying discount percentage.

function calculatePrice(price = 0, discount = 0) {
    discount = price * discount / 100
    let finalprice = price - discount
    return finalprice
}

// Test it:

console.log(calculatePrice(1000, 10))  // 900
console.log(calculatePrice(1000))      // 1000


// Q26. What will be the output?
function introduce(name = 'Anonymous', age = 0, city = 'Unknown') {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`)
}

introduce('Omer', 25, 'Hyderabad')
introduce('Ali', 22)
introduce('Sara')
introduce()
// Your Prediction:
// Name: Omer, Age: 25, City: Hyderabad
// Name: Ali, Age: 22, City: Unknown
// Name: Sara, Age: 0, City: Unknown
// Name: Anonymous, Age: 0, City: Unknown


