// / Q No : 44
// / Question: 44. What is the output of this code and why?
console.log([] + []);
console.log([] + {});
console.log({} + []);


// First one gives an empty string because empty arrays ([]) 
// are converted to "" when used with +
// Second one gives [object Object] because objects ({}) 
// are converted to "[object Object]" when used with +
// Same thing happens in the third console.log since {} is treated
// as an object here, so "{} + []" also becomes "[object Object]"
// / Expected Output: <write expected output>
// ""
// [object Object]
// [object Object]
