//exchange sort
let num = [9, 2, 4, 6, 8, 12]
for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        let temp = 0
        if (num[i] > num[j]) {
            temp = num[i]
            num[i] = num[j]
            num[j] = temp
        }
    }
} console.log(num);