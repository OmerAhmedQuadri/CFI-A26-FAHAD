const user = {
    name: 'fahad',
    age: 21,
    balance: 1000,
    getDetails: function () {
        return `Name: ${this.name}
Age: ${this.age}
Balanace: ${this.balance}`
    },
    updateBalance: function (b) {
        if (b < 0) {
            return
        }
        this.balance = b
        return this.balance
    },
    getBalance: function () {
        return `your balance is: ${this.balance}`
    },
    updateAge: function (a) {
        if (a < 0) {
            return
        }
        this.age = a
        return this.age


    },
    isAdult: function () {
        if (this.age >= 18) {
            return true
        } else {
            return false
        }
    }
}

console.log(user.isAdult());

console.log(user.updateAge(100000000));
console.log(user.getDetails());

console.log(user.getBalance()); 