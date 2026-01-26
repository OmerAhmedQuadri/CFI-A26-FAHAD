const person = {
    name: 'fahad',
    age: 21
}
console.log(person);

person.name = 'nawaz'
console.log(person);

person.address = 'hyderabad'
console.log(person);

person.fullname = 'fahad nawaz'
console.log(person);

delete person.name
console.log(person);

let school = 'liet'
let person2 = {
    school: school,
    age: 21
}
console.log(person2);

const person3 = {
    'full name': 'fahad nawaz',
    age: 21,
    address: 'hyderabad'
}

// console.log(person.full name);//will throw error 
// console.log(person.'full name');//will throw error 
console.log(person3.age);
console.log(person3['full name']);//will NOT throw error 
