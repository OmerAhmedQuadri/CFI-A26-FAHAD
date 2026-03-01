// / Q No : 36
// / Question: 36. What is the difference between deep copy and shallow copy in
// JavaScript? How can you achieve both?

//In JavaScript, the key difference between shallow copy, Shallow copies are usually created using the spread operator, Object.assign(), or methods like Array.slice()

//  deep copy is - a shallow copy shares references to nested structures, while a deep copy creates completely independent duplicates of all nested data. A common way to create a deep copy is using JSON.parse(JSON.stringify(object))