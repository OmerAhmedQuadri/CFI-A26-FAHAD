//length
let name1 = 'fahad nawaz'
console.log(name1.length);

//charAt
console.log(name1.charAt(2));

//endsWith
console.log(name1.endsWith("er"));
console.log(name1.endsWith("az"));

//charcCodeAt
let str = 'ABCD'
console.log(str.charCodeAt(0));
console.log('ABCD'.charCodeAt(0));

//indexOf
let str1 = 'hello world'
console.log(str1.indexOf('o'));
console.log(str1.indexOf('orld'));
console.log(str1.indexOf('osdfgh'));
console.log(str1.indexOf('o',5));

//includes
let str2 = "fahad nawaz"
console.log(str2.includes("fahad"));
console.log(str2.includes("sdfghj"));

//lastIndexOf
let a1 = "fahad nawaz khan"
console.log(a1.lastIndexOf('n'));
console.log(a1.lastIndexOf('n',14));