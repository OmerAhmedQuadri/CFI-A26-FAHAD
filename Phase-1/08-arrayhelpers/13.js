const users = [
    { name: 'omer', age: 17 },
    { name: 'fahad', age: 21 },
    { name: 'zayd', age: 23 },
    { name: 'taha', age: 22 },
    { name: 'atif', age: 21 },
    { name: 'yash', age: 21 },
    { name: 'haseeb', age: 20 },
    { name: 'abdu', age: 22 },
    { name: 'anas', age: 24 },
    { name: 'maseeh', age: 23 },
    { name: 'afnan', age: 23 },
]

const userObj = users.reduce((acc, curr) => {

    if (acc[curr.age]) {
        acc[curr.age].push(curr.name)
    } else
        acc[curr.age] = [curr.name]

    return acc
}, {})
console.log(userObj);

