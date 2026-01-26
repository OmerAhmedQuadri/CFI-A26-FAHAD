

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

//26 jan 26

let human = {
    name: "fahad",
    age: 23,
    subject: "js"
}

let address = {
    door_number: 12,
    area: "masabtank"
}

let human2 = {
    name: "fahad",
    age: 23,
    subject: "js",
    //nested objects
    address: {
        door_number: 12,
        area: "masabtank"
    }
}

console.log(human2);
console.log(human2.address);
console.log(human2.address.area);
console.log(human2["address"]["area"]); //accessing keys using sqaure bracket , it should always be enclosed as strings


// merging two objects
let human3 = {
    name: "fahad",
    age: 23,
    subject: "js"
}

let address2 = {
    door_number: 12,
    area: "masabtank"
}

let user = {
    person: human3,
    address: address2
}
console.log(user);
console.log(user.person.age);

let obj1 = {
    a: 1,
    b: 2
}

let obj2 = {
    c: 3,
    d: 4
}
//no need to specify key if you wanna use the same key
let obj3 = {
    obj1,
    obj12: obj2
}
console.log(obj3);
console.log(obj3.obj1.a);

//use of spread operator
let book = {
    title: "js",
    pages: 200
}

let author = {
    name: "RANDALL",
    age: 20
}

let mergeobj = {
    ...book,
    ...author
}
console.log(mergeobj);

let fruits = {
    1: "mango",
    2: "banana",
    3: "kiwi"
}

let veggies = {
    4: "tomato",
    5: "potato",
    3: "carrot"
}

console.log(veggies);

let basket = {
    ...veggies,
    ...fruits
}

console.log(basket);//carrot will be overwritten by kiwi because they have the same keys

//array + object

let user1 = [{ name: 'fahad' }, { age: 21 }, { subject: 'js' }]
console.log(user1);
console.log(user1[0]);
user1.pop()
console.log(user1);
user1.push({subject:'js'})
console.log(user1);
