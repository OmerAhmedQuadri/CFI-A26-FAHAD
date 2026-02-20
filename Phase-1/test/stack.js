import readline from 'readline-sync'
class Stack {
    #data = []
    #size
    constructor(size = Infinity) {
        if (typeof size != 'number' || isNaN(size) || size < 1) {
            throw new Error(`ENTER A VALID SIZE`)
        }
        this.#size = size
    }

    myPush(ele) {
        if (this.#data.length == this.#size) {
            console.log(`STACK IS FULL`);
        }
        return this.#data.push(ele)
    }

    myPop() {
        if (this.#data.length == 0) {
            console.log(`STACK IS EMPTY`);
        }
        return this.#data.pop()
    }

    get top() {
        if(this.#data.length)
            console.log(this.#data[this.#data.length - 1]);
        else 
            console.log('empty');
    }

    get height() {
        console.log(this.#data.length);
    }

    print() {
        if (this.#data.length == 0) {
            console.log(`STACK IS EMPTY`);
            return
        }
        console.log('----');
        for (let i = this.#data.length - 1; i >= 0; i--) {
            console.log(`|${this.#data[i]}|`);
            console.log('----');
        }

    }
}

// let stack = new Stack(5)
// stack.myPush(1)
// stack.myPush(2)
// stack.myPush(3)
// stack.myPush(4)
// stack.myPush(5)
// stack.print()

function createStack() {
    let size = readline.questionInt(`ENTER THE SIZE OF THE STACK: `)
    let stack = new Stack(size)
    console.log(`STACK IS CREATED`);

    while (true) {
        console.log(`
            ====OPERATIONS====
    1: PUSH
    2: POP
    3: TOP
    4: HEIGHT
    5: PRINT
    6: EXIT`);

        let choice = readline.questionInt(`ENTER A CHOICE: `)

        switch (choice) {
            case 1:
                let val = readline.questionInt(`ENTER A VAL YOU WANNA PUSH: `)
                stack.myPush(val)
                console.log(`PUSH SUCCESSFUL`);
                break;
            case 2:
                stack.myPop()
                console.log(`POP SUCCESSFUL`);
                break;
            case 3:
                stack.top
                break;
            case 4:
                stack.height
                break;
            case 5:
                stack.print()
                break;
            case 6:
                console.log(`BYE BYE`);
                return
            default:
                console.log(`INVALID CHOICE`);
                break;
        }
    }

}

createStack()