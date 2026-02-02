// let i
// let str = 'A B C D E'
// let pattern = ''
// for (i = 0; i < 5; i++) {
//     pattern = pattern + str[i]
//     console.log(pattern);
// }

let i1 = 65
let pattern1 = ''
for (i1 = 65; i1 < 70; i1++) {
    pattern1 = pattern1 + String.fromCharCode(i1) + ' '
    console.log(pattern1);
}

let i
let j
for (i = 1; i < 3; i++) {
    console.log('i:', i);
    for (j = 1; j < 4; j++) {
        console.log('j:', j);
    } j = 1
}

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log("fahad");
    }
}


for (let rows = 0; rows < 5; rows++) {
    let str = ''
    for (let cols = 0; cols <= rows; cols++) {
        str = str + rows + cols
    }
    console.log(str);
}

