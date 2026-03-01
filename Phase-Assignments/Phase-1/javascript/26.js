// / Q No : 26
// // / Question: 26. Explain .find() and .findIndex() with examples


// .find() is used when you want to get the first element in an array that matches a condition.
let str = ['hello', 'hi', 'hola', 'salam'];

let wherehola = str.find((ele) => {
    return ele == "hola"
});

console.log(wherehola);

//.findIndex() works almost the same way but instead of returning the element, it returns the index of the first element that matches the condition
let whereholaindex = str.findIndex((ele) => {
    return ele == "hola"
});

console.log(whereholaindex);