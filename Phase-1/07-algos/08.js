//exchange sort
let num = [9, 2, 4, 6, 8, 12]
for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
        if (num[j] > num[j + 1]) {
            let temp = num[j]
            num[j] = num[j + 1]
            num[j+1] = temp
            console.log(num);
        }
    }
}