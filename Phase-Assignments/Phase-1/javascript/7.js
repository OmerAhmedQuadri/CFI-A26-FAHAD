// / Q No : 07
// / Question: 7. Write a function that takes a number and prints EVEN or ODD, or throws
// an error if the given argument is not a number.

import { questionInt } from 'readline-sync';

function oddeven(n) {
    if (n % 2 == 0) {
        console.log(`EVEN`);
    }
    if (n % 2 == 1) {
        console.log(`ODD`);
    }
}

let n = questionInt(`ENTER A NUMBER: `)
oddeven(n)

// / Expected Output: <write expected output></write>
// ENTER A NUMBER: 70
// EVEN