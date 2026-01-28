// a
// a a a
// a a a a a
// a a a a a a a

let pattern = 'a '
let i = 0
let max = 4

while (i < max) {
    console.log(pattern);
    pattern = pattern + 'a ' + 'a '
    i++
}

let i2 = 0
while (i2 < max) {
    console.log(pattern);
    pattern = pattern + 'a a '
    i2++
}