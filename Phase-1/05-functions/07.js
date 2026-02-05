let arr = [23, 55, 64, 76, 99, 108]
let evennum = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        evennum.push(arr[i])
    }
} console.log(evennum);

function giveEven(nums) {
    let evens = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            evens.push(nums[i])
        }
    } return evens
}

console.log(giveEven([1, 2, 3, 4, 5]));

function giveEven1(nums) {
    let evens = []
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            evens[count++] = nums[i]
        }
    } return evens
}

console.log(giveEven1([1, 2, 3, 4, 5]));


function giveEven2(nums) {
    if (!(Array.isArray(nums))){
        console.log('enter a valid array');
        return;
    }
    let evens = []
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            evens[count++] = nums[i]
        }
    } return evens
}

console.log(giveEven2(2));