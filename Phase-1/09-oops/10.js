class Stack {
    #data = []
    height = 0
    constructor() {

    }
    top() {
        if (this.height == 0) {
            console.log('stack is empty');
            return
        }
        console.log('Top:');
        console.log(this.#data[this.height - 1]);
    }
    push(ele) {
        this.#data[this.height] = ele
        this.height++
    }
    pop() {
        this.#data.pop()
        this.height--
    }
    print() {
        if (this.height == 0) {
            console.log('stack is empty');
            return
        }
        // console.log('----');
        for (let i = this.height-1; i >= 0; i--)
            console.log('|' + this.#data[i] + '|');
        // console.log('----');

    }
}

const stacky = new Stack()
stacky.print()
stacky.push(4)
stacky.push(8)
stacky.push(9)
stacky.print()
stacky.pop()
stacky.print()
stacky.top()