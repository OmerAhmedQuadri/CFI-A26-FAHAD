//Number
console.log(Number(25));
console.log(Number("25"));

console.log("number methods weird");
console.log(Number(''));
console.log(Number(' '));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

//parseInt
console.log(10.5);
console.log(parseInt(10.5));
console.log(parseInt("10.5xxx"));
console.log(parseInt("10.5x109"));
console.log(parseInt("x10.5x109"));

console.log(parseInt("200px"));
console.log(parseInt("200 20"));
console.log(parseInt("200-50"));
console.log(parseInt(" 200px"));
console.log(parseInt("  ps200px"));
console.log(parseInt(" __200px"));

console.log(parseInt('1010', 2)); //binary 10
console.log(parseInt('1010', 16)); // hexa 4112
console.log(parseInt('0x1010')); // hexa 4112
console.log(parseInt('0xA')); // hexa 10
console.log(parseInt('0xa')); // hexa 10
console.log(parseInt('A', 16)); // hexa 10
console.log(parseInt('a', 16)); // hexa 10

//0b - binary
console.log(0b1011);
//0x - hexa
console.log(0x1011);
//0o - octal
console.log(0o1011);
// console.log(01011);//this will be considered octal

//toFixed
let num1 = 155.268444
console.log(num1.toFixed(3));

let num2 = 155.268644
console.log(num2.toFixed(3));//returns as strings

//parseFloat
console.log(parseFloat(123.456));
console.log(parseFloat("123.456"));

//toString
let a = 10
console.log(a);
console.log(a.toString());//coverts the number to string
console.log(a.toString(2));//converts the number to string and in binary
console.log(a.toString(16));//converts the number to string and in hexa
console.log(a.toString(8));//converts the number to string and in octal

