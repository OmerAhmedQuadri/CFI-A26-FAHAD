const num = [23, 54, 66, 99, 62, 84]
const newArr = num.reduce((acc, curr) => {
    acc.push(curr)
    return acc
}, [])
console.log(newArr);

