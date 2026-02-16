class myArray {
    #_data = []
    constructor() {

    }
    get length(){ //get allows me to call length without paranthesis
        return this.#_data.length
    }
    push(ele){
        this.#_data.push(ele)
    }
    pop(){
        this.#_data.pop()
    }
}