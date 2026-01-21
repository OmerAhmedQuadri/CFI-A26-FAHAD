// console.log('AND'); //RETURNS THE FIRST FALSE VALUE

// console.log(false && false);
// console.log(true && false);
// console.log(false && true);
// console.log(true && true);

// console.log(100 && 40 && 30);
// console.log(100 && 40 && 0 && 15);
// console.log(100 && 40 && "" && 15);
// console.log(100 && 40 && undefined && 15);
// console.log(100 && 40 && null && 15);

// console.log('OR'); //RETURNS THE FIRST TRUE VALUE

// console.log(false || false);
// console.log(true || false);
// console.log(false || true);
// console.log(true || true);

console.log("" || "7");
console.log("" || 0 || undefined || null || NaN || "hello");

console.log(100 || 40 || 30);
console.log(0 || 40 || 30);
console.log(0 || "" || 30);
console.log(0 || "" || undefined || null);
console.log(false || 0 || "" || undefined);
console.log("" || "hello" || 0);
console.log(null || undefined || false || 50);
console.log(false || true || false);
console.log(0 || NaN || "js");
console.log(undefined || null || 0 || "");


console.log("NOT"); //INVERTS THE VALUE