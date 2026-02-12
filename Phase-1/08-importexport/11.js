const fruitsArray = ['apple', 'mango', 'anas', 'apple', 'orange', 'mango', 'mango']

const fruitsObject = fruitsArray.reduce((obj, fruit) => {
    if (obj[fruit] == undefined) {
        obj[fruit] = 1
    }
    else {
        obj[fruit]++
    }
    return obj
}, {})
console.log(fruitsObject);

