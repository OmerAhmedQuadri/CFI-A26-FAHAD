//math.round
console.log(17.4);
console.log(Math.round(17.4));

//math.floor
console.log(17.999);
console.log(Math.floor(17.999));

//math.ceil
console.log(17.0001);
console.log(Math.ceil(17.0001));

//math.abs
console.log(17);
console.log(Math.abs(17));
console.log(Math.abs(17.5));
console.log(Math.abs(-17.5));

//math.trunc
console.log(17.666);
console.log(Math.trunc(17.666));

//math.pow
console.log(2);
console.log(Math.pow(2, 4));
console.log(Math.pow(3, 3));

//math.sqrt
console.log(1024);
console.log(Math.sqrt(1024));
console.log(Math.sqrt(25));

//math.min
console.log(24, 32, 10002, -5);
console.log(Math.min(24, 32, 10002, -5));
console.log(Math.min([24, 32, 10002, -5]));
console.log(Math.min(...[24, 32, 10002, -5]));

let arr = [24, 32, 10002, -5]
console.log(Math.min(...arr));

//math.max
console.log(24, 32, 10002, -5);
console.log(Math.max(24, 32, 10002, -5));
console.log(Math.max([24, 32, 10002, -5]));
console.log(Math.max(...[24, 32, 10002, -5]));

let arr2 = [24, 32, 10002, -5]
console.log(Math.max(...arr));

//math.random
console.log(Math.random());