import fs from 'fs'
console.log('start');

let data = fs.readFileSync('file.txt')
data = data.toString()
console.log(data);

console.log('end');

