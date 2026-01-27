


// Section 6: Switch Case

// Q44. Predict the output.

let item = 'carrot'

switch (item) {
    case 'apple':
        console.log('It is a fruit')
        break
    case 'carrot':
        console.log('It is a vegetable')
        break
    case 'tomato':
        console.log('It is a vegetable')
        break
    default:
        console.log('Unknown item')
}
//It is a vegetable

// Q45. Create a day name printer using switch.
let day1 = 3
switch (day1) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        break;
}

// Q46. Predict the output and name the behavior.

let num6 = 2

switch (num6) {
    case 1:
        console.log('One')
    case 2:
        console.log('Two')
    case 3:
        console.log('Three')
    default:
        console.log('Other')
}
//two three other 
//this behaviour is called fall through 

// Q47. Create a grade calculator using switch.
let grade1 = 'B'
switch (grade1) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Good');
        break;
    case 'C':
        console.log('Average');
        break;
    case 'F':
        console.log('Fail');
        break;
    default:
        console.log('Invalid grade');
        break;
}

// Q48. Predict the output.

let color = 'red'

switch (color) {
    case 'red':
    case 'pink':
        console.log('Shades of red')
        break
    case 'blue':
    case 'navy':
        console.log('Shades of blue')
        break
    default:
        console.log('Other color')
}//Shades of red


// Q49. Create a month name printer using switch.
let month = 5

switch (month) {
    case 1:
        console.log('January')
        break
    case 2:
        console.log('February')
        break
    case 3:
        console.log('March')
        break
    case 4:
        console.log('April')
        break
    case 5:
        console.log('May')
        break
    case 6:
        console.log('June')
        break
    case 7:
        console.log('July')
        break
    case 8:
        console.log('August')
        break
    case 9:
        console.log('September')
        break
    case 10:
        console.log('October')
        break
    case 11:
        console.log('November')
        break
    case 12:
        console.log('December')
        break
    default:
        console.log('Invalid month')
}


// Q50. When should you use switch instead of if...else if?
//WE USE SWITCH WHEN WE ARE COMPARING A VARIABLE AGAINST MULTIPLE FIXED KNOWN VALUES

// Q51. Convert if...else to switch.
let fruit = 'apple'

switch (fruit) {
    case 'apple':
        console.log('Red fruit')
        break
    case 'banana':
        console.log('Yellow fruit')
        break
    case 'orange':
        console.log('Orange fruit')
        break
    default:
        console.log('Unknown fruit')
}