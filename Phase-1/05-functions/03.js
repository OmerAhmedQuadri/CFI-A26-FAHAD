//write a function 

let user1 = {
    name: 'fahad',
    age: 21
}
let adress = {
    city: 'hyderabad',
    area: 'tolichowki'
}

// let user2 = { ...user1 }
// user1.name = 'nawaz'
// console.log(user2);
// console.log(user1);
let user2 = { ...user1, ...adress }
user1.name = 'nawaz'
console.log(user2);
console.log(user1);

