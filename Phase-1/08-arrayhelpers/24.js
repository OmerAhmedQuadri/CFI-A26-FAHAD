const fruit = ['banana', 'orange', 'apple', 'mango', 'grapes']

// let res = fruit.splice(-1, 2, 'anas','berries')
let res = fruit.splice(1, 0, 'anas', 'berries')

console.log('fruits:', fruit);
console.log('result:', res);

let index = fruit.indexOf('janas')
if (index == -1) {
    index = 'not found'
}
if (index !== 'not found') {
    fruit.splice(index, 1)
} else {
    console.log('not found');
}
console.log(index);
console.log(fruit);