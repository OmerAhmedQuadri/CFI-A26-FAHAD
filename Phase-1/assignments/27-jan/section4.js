
// Section 4: Nested if...else

// Q31. Predict the output.

let name4 = 'yash'
let marks3 = 75

if (name4 == 'yash') {
    if (marks3 > 90) {
        console.log('Yash scored excellent')
    } else if (marks3 > 60) {
        console.log('Yash passed')
    } else {
        console.log('Yash failed')
    }
}//YASH PASSED


// Q32. Create a login system using nested if.
let username1 = "admin"
let password1 = "1234"
if (username1 == "admin") {
    if (password1 == "1234") {
        console.log("login successful");
    } else {
        console.log('wrong password');
    }
} else {
    console.log('user not found');
}

// Q33. Predict the output.

let age2 = 25
let hasLicense = true

if (age2 >= 18) {
    if (hasLicense) {
        console.log('You can drive')
    } else {
        console.log('You need a license')
    }
} else {
    console.log('You are too young')
}
//YOU CAN DRIVE

// Q34. Create a ticket booking system with nested if.
let age4 = 15
let hasParent = true
if (age4 >= 18) {
    console.log('ticket confirmed');
} else if (age < 18) {
    if (hasParent) {
        console.log('ticket confirmed with parent');
    } else {
        console.log('need parent permission');
    }
}

// Q35. Rewrite nested if using logical operators.
let marks6 = 85
let attendance = 90

if (marks >= 80 && attendance >= 85) {
    console.log('Excellent student')
}

// Q36. Predict the output.

let num5 = 10

if (num5 > 0) {
    if (num5 % 2 === 0) {
        console.log('Positive even number')
    } else {
        console.log('Positive odd number')
    }
} else {
    console.log('Negative or zero')
}
//POSITIVE EVEN NUMBER

// Q37. Create a grade system with attendance.
let marks7 = 78
let attendance1 = 70
if (marks >= 40) {
    if (attendance1 >= 75) {
        console.log('PASS');
    } else {
        console.log('detained due to low attendance');
    }
} else {
    console.log('FAIL');
}

// Q38. Rewrite nested if in a better way.
if (age >= 18 && isCitizen) {
    console.log("can vote");
}
