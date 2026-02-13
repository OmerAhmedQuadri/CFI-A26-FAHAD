// let num = 17295.85
let num = [17295.85, 234982.9, 92402.83]

console.log(num);
console.log(num.toLocaleString());
console.log(num.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'

}));
console.log(num.toLocaleString('en-US', {
    style: 'currency',
    currency: 'INR'

}));
console.log(num.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR'

}));
console.log(num.toLocaleString('en-DE'));
console.log(typeof num.toLocaleString());

