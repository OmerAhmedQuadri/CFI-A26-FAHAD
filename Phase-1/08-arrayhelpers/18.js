const fruit = ['apple', 'banana', NaN, 'orange', 'banana']

const res1 = fruit.includes('apple')
const res2 = fruit.includes('apple', 1)
const res = fruit.includes(NaN)
console.log(res1);
console.log(res2);
console.log(res);


