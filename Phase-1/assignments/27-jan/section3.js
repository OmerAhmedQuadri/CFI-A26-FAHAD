// Section 3: if...else if...else

// Q21. Create a grading system using marks = 75.
let marks1 = 75
if (marks1 >= 90) {
    console.log("SCORED A+");
} else if (marks1 >= 70 && marks1 < 90) {
    console.log("SCORED B+");
} else {
    console.log("SCORED C+");
}


// Q22. Predict the output.

let name3 = 'fahad'

if (name3 == 'omer') {
    console.log('Hello omer')
} else if (name3 == 'fahad') {
    console.log('Hello fahad')
} else {
    console.log('Hello stranger')
}// Hello fahad


// Q23. Create a day name printer using if...else if...else.
let day = 3

if (day == 1) {
    console.log('Monday')
} else if (day == 2) {
    console.log('Tuesday')
} else if (day == 3) {
    console.log('Wednesday')
} else if (day == 4) {
    console.log('Thursday')
} else if (day == 5) {
    console.log('Friday')
} else if (day == 6) {
    console.log('Saturday')
} else if (day == 7) {
    console.log('Sunday')
} else {
    console.log('Invalid day')
}


// Q24. Predict the output and explain why only one block runs.

let num4 = 15

if (num4 > 20) {
    console.log('Greater than 20')
} else if (num4 > 10) {
    console.log('Greater than 10')
} else if (num4 > 5) {
    console.log('Greater than 5')
} else {
    console.log('5 or less')
}//Greater than 10 , only one block runs because in conditional statements only the first true condition executes and the rest are skipped.


// Q25. Create an age category checker.
let age3 = 35

if (age3 < 13) {
    console.log('Child')
} else if (age3 < 20) {
    console.log('Teenager')
} else if (age3 < 60) {
    console.log('Adult')
} else {
    console.log('Senior')
}



// Q26. Predict the output.

let price2 = 1500
let discount = 0

if (price2 >= 5000) {
    discount = 30
} else if (price2 >= 2000) {
    discount = 20
} else if (price2 >= 1000) {
    discount = 10
} else {
    discount = 5
}

console.log('Your discount is ' + discount + '%')// Your discount is 10%


// Q27. Create a score checker where score = 0.
let score1 = 0
if (score1 == 0) {
    console.log("NO SCORE YET");
} else if (score1 < 50) {
    console.log("FAIL");
} else if (score1 < 75) {
    console.log("PASS");
} else {
    console.log("EXCELLENT");
}


// Q28. Predict the output.

let temperature2 = 15

if (temperature2 < 0) {
    console.log('Freezing')
} else if (temperature2 < 10) {
    console.log('Cold')
} else if (temperature2 < 20) {
    console.log('Cool')
} else if (temperature2 < 30) {
    console.log('Warm')
} else {
    console.log('Hot')
}
//COOL

// Q29. Create a discount calculator using if...else if.
let price1 = 3500
let discount1

if (price >= 5000) {
    discount = 25
} else if (price >= 3000) {
    discount = 15
} else if (price >= 1000) {
    discount = 10
} else {
    discount = 0
}

console.log(`Discount: ${discount}%`)



// Q30. Create a BMI category checker.
let bmi = 22
if (bmi < 18.5) {
    console.log("UNDERWEIGHT");
} else if (bmi < 25) {
    console.log("NORMAL");
} else if (bmi < 30) {
    console.log("OVERWIGHT");
} else {
    console.log("OBESE");
}
