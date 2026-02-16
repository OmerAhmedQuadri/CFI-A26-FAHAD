class myArray {
    constructor(...nums) {
        this.nums = nums
    }
    push(ele) {
        this.nums.splice(-1, 0, ele,)

    }
    pop() {
        this.nums.splice(-1, 1)
    }
    unshift(ele) {
        this.nums.splice(0, 0, ele)
    }
    shift() {
        this.nums.splice(0, 1)
    }
}
const arr = new myArray(1,2,3)
console.log(arr);
arr.push(4)
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift(5)
console.log(arr);
arr.shift()
console.log(arr);