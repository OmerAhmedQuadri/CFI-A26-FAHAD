let i = 1
let j = 1
let max = 5
for (i; i <= 4; i++) {
    let str = ''
    for (j = i; j < max + i; j++) {
        str = str + j + ' '
    } console.log(str);
    // max++
}