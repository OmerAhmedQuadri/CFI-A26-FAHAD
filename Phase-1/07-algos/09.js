//selection sort
let num = [9, 2, 4, 6, 8, 12]
for (let i = 0; i < num.length; i++) {
    let min = i
    for (let j = i + 1; j < num.length; j++) {
        if (num[min] < num[j]) {
            min = j
        }
    }
    let temp = num[i]
    num[i] = num[min]
    num[min] = temp

} console.log(num);