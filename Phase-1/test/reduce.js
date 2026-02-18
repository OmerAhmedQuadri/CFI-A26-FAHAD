let deets = [
    { name: 'Yash', age: 21 },
    { name: 'Maseeh', age: 22 },
    { name: 'Fahad', age: 23 },
    { name: 'Nida', age: 22 },
    { name: 'Taha', age: 23 },
    { name: 'Zayd', age: 21 },
]

let fig = deets.reduce((acc, curr) => {
    if (acc[curr.age] == undefined) {
        acc[curr.age] = []
    }
    acc[curr.age].push(curr.name)
    return acc
}, {})

console.log(fig);