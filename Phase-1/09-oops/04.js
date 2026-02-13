class user {
    #balance = 0
    constructor(name, age, bal) {
        this.name = name
        this.age = age
        this.#balance = bal
    }
    getBalance() {
        return this.#balance
    }
    deposit(amt) {
        if (amt < 0) {
            return null
        }
        this.#balance = amt
        return this.#balance
    }
    withdraw(amt) {
        if (amt < 0 || amt > this.#balance) {
            return null
        }
        this.#balance -= amt
        return this.#balance
    }
}

const user1 = new user('fahad', 21, 1000000000000000000000000000000n)

console.log(user1);
console.log(object);