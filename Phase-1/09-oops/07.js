class user {
    #balance = 0
    static branch = 'CFI'
    constructor(name, age, city, balance) {
        user.validity(name, age, city, balance)
        this.name = name.trim()
        this.age = age
        this.city = city.trim()
        this.#balance = balance
    }
    static validity(name, age, city, balance) {
        if (typeof name != 'string' || !name || name.trim().length < 3) {
            throw new Error('enter a valid name')
        }
        if (typeof age != 'number' || !age || isNaN(age) || age < 18 || age > 100) {
            throw new Error('enter a valid age')
        }
        if (typeof city != 'string' || !city || city.trim().length < 3) {
            throw new Error('enter a valid city')
        }
        if (!balance || typeof balance != 'number' || isNaN(balance) || balance < 0 || balance > 10000) {
            throw new Error("enter a valid balance")
        }

    }

    getDetails() {
        console.log(`Name: ${this.name}
Age: ${this.age}
City: ${this.city}
Balance: ${this.#balance}`)
    }
    withdraw(balance) {
        if (!balance || typeof balance != 'number' || isNaN(balance) || balance < 1 || balance > 10000) {
            throw new Error("please enter a valid amout to withdraw")
        }
        if (this.#balance < balance) {
            throw new Error("not enough balance")
        }
        this.#balance -= balance
        console.log(`your new balance is: ${this.#balance}`);
    }
    deposit(balance) {
        if (!balance || typeof balance != 'number' || isNaN(balance) || balance < 1 || balance > 10000) {
            throw new Error("please enter a valid amout to deposit")
        }
        this.#balance += balance
        console.log(`your new balance is: ${this.#balance}`);
    }
}


const user1 = new user('      chun li', 21, 'hyda', 200)
user1.getDetails()
user1.withdraw(100)
console.log('---------------');
user1.getDetails()
user1.deposit(200)
