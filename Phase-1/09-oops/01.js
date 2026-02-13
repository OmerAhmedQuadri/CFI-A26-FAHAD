const user = {
    name: 'fahad',
    age: 21,
    balance: 1000,
    getDetails: () => {
        console.log('this is a user method');
    }
}

console.log(user);
console.log(user.getDetails);
user.getDetails()