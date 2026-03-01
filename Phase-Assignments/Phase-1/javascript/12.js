// / Q No : 12
// / Question: 12. Create a leap year checker function:
// year = 20xx
// Print "Leap year" or "Not a leap year"
// A year is leap if divisible by 4 AND (not divisible by 100 OR
// divisible by 400)

function leapYear(year) {
    if (year % 4 == 0 && (year % 100 !== 0 || year % 400 !== 0)){
        console.log(`IT IS A LEAP YEAR`);
    }else{
        console.log(`it is not a leap year`);
    }
}

leapYear(2008)

// / Expected Output: <write expected output></write>
// IT IS A LEAP YEAR