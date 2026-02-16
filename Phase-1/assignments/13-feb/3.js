// Level 3 - Advanced (Questions 29-40)
// Q29. You have this array:

const prices = [1000.50, 2500.75, 500.99];
// Use .toLocaleString() to format as:

// Indian Rupees (INR)
// US Dollars (USD)
// Euros (EUR)
console.log(prices.toLocaleString('en-US', { style: 'currency', currency: 'INR' }));
console.log(prices.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
console.log(prices.toLocaleString('en-US', { style: 'currency', currency: 'EUR' }));


// Q30. You have this array:

const nums = [1, 2, 3, 4, 5];
// Use .toReversed() to create a reversed copy. Does the original array change? Compare with .reverse().
const nums2 = nums.toReversed()
console.log(nums2);

// Q31. You have this array:

const items = ['apple', 'banana', 'orange', 'grape', 'mango'];
// Write a function removeItem(arr, item) that uses .indexOf() and .splice() to remove the first occurrence of an item. Test with removing 'orange'.

function removeItem(arr, item) {
    if (arr.indexOf(item)) {
        return arr.splice(0, 1)
    }
}

console.log(removeItem(items, 'orange'));