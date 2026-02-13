class shape {
    constructor() {

    }
    area() {
        console.log(`Area: `);
    }
}

class square extends shape {
    constructor(side) {
        super()
        this.side = side
    }
    area() {
        console.log(`Area of square: ${this.side * this.side}`);
    }
}

class circle extends shape {
    static pi = 3.14
    constructor(radius) {
        super()
        this.radius = radius
    }
    area() {
        console.log(`Area of circle: ${(circle.pi * this.radius) ** 2}`);
    }
}

const c = new circle(10)
const s = new square(4)

c.area()
s.area()