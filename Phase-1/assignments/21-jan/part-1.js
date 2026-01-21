// Question 1: Basic AND Operator

console.log(true && true)
// Your Prediction: true 

// Question 2: Basic OR Operator

console.log(false || false)
// Your Prediction: false

// Question 3: Basic NOT Operator

console.log(!true)
// Your Prediction: false

// Question 4: AND with False

console.log(true && false)
// Your Prediction: false

// Question 5: OR with True

console.log(false || true)
// Your Prediction: true

// Question 6: NOT False

console.log(!false)
// Your Prediction: true

// Question 7: Combined AND and NOT

console.log(true && !false)
// Your Prediction: true

// Question 8: OR and AND Together

console.log(false || true && false)
// Your Prediction: false

// Question 9: NOT with AND

console.log(!(true && false))
// Your Prediction: true

// Question 10: Complex Expression 1

console.log(!(false || false) && true)
// Your Prediction: true

// Question 11: OR, AND, and NOT

console.log(true || false && !true)
// Your Prediction: true

// Question 12: NOT with OR

console.log(!(true || false) && false)
// Your Prediction: false

// Question 13: Nested NOT and AND

console.log(false || !(true && false))
// Your Prediction: true

// Question 14: Complex Expression 2

console.log(!(false || true && false))
// Your Prediction: true

// Question 15: Multiple Operations

console.log(true && !(false || true && false))
// Your Prediction: true

// Question 16: Parentheses and NOT

console.log(!(true && (false || true)) || false)
// Your Prediction: false

// Question 17: Double NOT

console.log(false || !(!(true && false) || false))
// Your Prediction: false

// Question 18: Complex Nested Expression

console.log(!(false && (true || false)) && true)
// Your Prediction: true

// Question 19: Multiple NOT Operations

console.log(!((true || false) && !(false && true)))
// Your Prediction: false

// Question 20: Advanced Combination

console.log(false || !(true && !(false || true && false)))
// Your Prediction: false

// Question 21: Triple NOT

console.log(!(!true || (false && !(true || false))))
// Your Prediction: true

// Question 22: Deeply Nested Expression

console.log(!(false || !(!(true && false) && (false || true))))
// Your Prediction: true

// Question 23: Very Complex Expression

console.log(!((false || true) && !(!(false && true) || !(true || false && true))))
// Your Prediction: true

// Question 24: Combined Expression with OR

console.log((true && false) || true)
// Your Prediction: true

// Question 25: Ultimate Challenge

console.log(false || !(!(false || true) && false))
// Your Prediction: true

// Question 26: AND with Numbers

console.log(100 && 40 && 30)
// Your Prediction: 30

// Question 27: AND with Zero

console.log(100 && 40 && 0 && 15)
// Your Prediction: 0

// Question 28: AND with Empty String

console.log(100 && 40 && "" && 15)
// Your Prediction:""

// Question 29: AND with Undefined

console.log(100 && 40 && undefined && 15)
// Your Prediction:undefined

// Question 30: AND with Null

console.log(100 && 40 && null && 15)
// Your Prediction:null

// Question 31: AND with All Falsy Values

console.log(undefined && null && NaN && "hello")
// Your Prediction: undefined

// Question 32: OR with Numbers

console.log(100 || 40 || 30)
// Your Prediction: 100

// Question 33: OR with Zero First

console.log(0 || 40 || 30)
// Your Prediction: 40

// Question 34: OR with Empty String and Zero

console.log(0 || "" || 30)
// Your Prediction: 30

// Question 35: OR with Multiple Falsy Values

console.log(0 || "" || undefined || null)
// Your Prediction: null

// Question 36: OR with False First

console.log(false || 0 || "" || undefined)
// Your Prediction: undefined

// Question 37: OR with Strings

console.log("" || "hello" || 0)
// Your Prediction: hello

// Question 38: OR with Null and Number

console.log(null || undefined || false || 50)
// Your Prediction: 50

// Question 39: OR with Boolean Values

console.log(false || true || false)
// Your Prediction: true

// Question 40: OR with NaN

console.log(0 || NaN || "JS")
// Your Prediction: JS

// Question 41: OR with All Falsy

console.log(undefined || null || 0 || "")
// Your Prediction: ""

// Question 42: OR with Long Falsy Chain

console.log("" || 0 || undefined || null || NaN || "hello")
// Your Prediction: hello

// Question 43: OR with Two Strings

console.log("" || "7")
// Your Prediction: 7

// Question 44: AND with String and Number

console.log("hello" && 100 && 50)
// Your Prediction: 50

// Question 45: AND with False at End

console.log(10 && 20 && 30 && false)
// Your Prediction: false

// Question 46: OR with Number First

console.log(25 || 0 || "")
// Your Prediction: 25

// Question 47: AND with NaN

console.log(50 && NaN && 100)
// Your Prediction: NaN

// Question 48: Mixed AND and OR

console.log(0 || 10 && 20)
// Your Prediction: 20

// Question 49: Complex Mixed Expression

console.log(false && 10 || 30)
// Your Prediction: 30

// Question 50: Ultimate Value Challenge

console.log("" || 0 && 50 || "end")
// Your Prediction: "end"
