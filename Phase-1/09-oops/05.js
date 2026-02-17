class animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    updateAge(age) {
        this.age = age
        return this.age
    }
    getDetails() {
        console.log(`Name: ${this.name}\nAge: ${this.age}`);
    }
}

class dog extends animal {
    #sound = '---'
    constructor(name, age, breed, sound) {
        super(name, age)
        this.breed = breed
        if (sound) this.#sound = sound
    }
    getDetails() {
        super.getDetails()
        console.log(`Breed: ${this.breed}`);
    }
    getSound() {
        console.log(`${this.name} says ${this.#sound}`);
    }
}

const doggo = new dog('cow', 2000, 'akshay kumar', 'oogabooga')
console.log(doggo);
doggo.getDetails()
doggo.getSound()
doggo.getSound()
doggo.getSound()