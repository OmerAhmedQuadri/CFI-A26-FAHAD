//break and continue

let i = 0
let max = 10

while (i <= max) {
    console.log(i)
    if (i == 5) {
        break
    };
    i++
}

let i1 = 1
while (i1 <= max) {
    i1++
    if (i1 == 5) {
        continue
    };
    console.log(i1)
}