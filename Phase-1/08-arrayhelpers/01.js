//objec destructurng
let user = {
    name: "fahad",
    age: 21,
    city: 'hyd'
}

function test(usr) {
    const { name, age, pin = 50000 } = usr
    console.log(name, age, pin);
}
test(user)