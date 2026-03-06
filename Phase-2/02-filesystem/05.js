import fs from 'fs'


const users = [
    { name: 'omer', age: 21, city: 'hyderabad' },
    { name: 'fahad', age: 21, city: 'tolichowki' },
    { name: 'fazal', age: 22, city: 'masabtank' }
]


// console.log(users);
// console.log(typeof users);
// const data = JSON.stringify(users, null, 4)
// console.log(data);
// console.log(typeof data);

fs.writeFile('users.json', JSON.stringify(users, null, 4), (err) => {
    if (err) return console.log(err);
    console.log(`write successful`);
})




