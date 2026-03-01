// / Q No : 34
// / Question: 34. Construct a CLI application with the following operations menu:
// 0. Exit
// 1. Area of square
// 2. Area of rectangle
// 3. Area of circle
import { questionInt } from "readline-sync";

function square(s) {
    return console.log(`The Area of Square is: ${s * s}`);
}
function rectangle(l, b) {
    return console.log(`The Area of Rectangle is: ${l * b}`);
}
function circle(r) {
    return console.log(`The Area of Cirle is: ${3.14 * (r ** 2)}`);
}

while (true) {
    console.log(`===AREA OF SHAPES===
0: EXIT
1: AREA OF SQUARE
2: AREA OF RECTANGLE
3: AREA OF CIRCLE`);

    let choice = questionInt(`ENTER A CHOICE: `)
    if (choice == 0) {
        console.log(`exiting...`);
        break;
    }
    switch (choice) {
        case 1:
            let s = questionInt(`ENTER A SIDE: `)
            square(s)
            break;
        case 2:
            let l = questionInt(`ENTER THE LENGTH: `)
            let b = questionInt(`ENTER THE BREADTH: `)
            rectangle(l, b)
            break;
        case 3:
            let r = questionInt(`ENTER THE RADIUS: `)
            circle(r)
            break;
    }

}


// / Expected Output: <write expected output>
