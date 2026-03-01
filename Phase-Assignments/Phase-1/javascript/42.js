// / Q No : 42
// / Question: 42. What are spread and rest operators? Explain their differences with
// examples.

// The spread operator is used to expand or spread elements from an of an array, string, or object into individual elements.
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2);

// The rest operator is used in function parameters to collect all remaining elements into an array.
function add(...numbers) {
  return numbers;
}
console.log(1,2,3,4,5);