const user = {
    name: 'fahad',
    age: 21,
    balance: 1000,
    getDetails: function () {
        console.log(`Name: ${this.name}
Age: ${this.age}
Balanace: ${this.balance}`);
    },
    updateBalance: function (b) {
        if (b < 0) {
            return
        }
        this.balance = b
    }
}

console.log(user);
console.log(user.getDetails);
user.getDetails()
user.updateBalance(50)
user.getDetails()