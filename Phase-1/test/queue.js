import readline, { question } from 'readline-sync'
class Queue {
    #data = []
    limit
    constructor(limit = Infinity) {
        if (typeof limit != 'number' || isNaN(limit) || limit < 1) {
            throw new Error("ENTER A VALID LIMIT")
        }
        this.limit = limit
    }
    enqueue(ele) {
        if (this.#data.length >= this.limit) {
            console.log('queue is full');
            return
        }
        this.#data.push(ele)
    }

    dequeue() {
        if (this.#data.length == 0) {
            console.log('queue is empty');
            return
        }
        return this.#data.shift()
    }

    get front() {
        if (this.#data.length == 0) {
            console.log('queue is empty');
            return
        }
        console.log(this.#data[0]);
    }

    print() {
        if (this.#data.length == 0) {
            console.log('queue is empty');
            return
        }
        console.log(`front---> ${this.#data.join(' ')}`);

    }
}

// const q = new Queue(5)
// q.print()
// q.enqueue(2)
// q.enqueue(12)
// q.enqueue(4)
// q.enqueue(23)
// q.print()
// q.front
// q.dequeue()
// q.print()


function createQueue() {
    let limit = readline.questionInt(`Set queue limit: `)
    let queue = new Queue(limit)

    while (true) {

        console.log(`
            ====OPERATIONS====

    1: ENQUEUE
    2: DEQUEUE
    3: FRONT
    4: PRINT
    5: EXIT`);

        const choice = readline.questionInt(`
            ENTER YOUR CHOICE: `)
        if (choice == 5) {
            return
        }
        switch (choice) {
            case 1:
                let val = readline.questionInt(`Enter the value of element you wanna enqueue: `)
                queue.enqueue(val)
                console.log(`done!`);
                break;

            case 2:
                const rem = queue.dequeue()
                console.log(`done!`);
                break;
            case 3:
                queue.front
                break;
            case 4:
                queue.print()
                break;
            default:
                console.log('ENTER A VALID CHOICE');
                break;


        }

    }

}

createQueue()