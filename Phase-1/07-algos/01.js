//write a fucntion 2 inputs arr and target and rreturns the index of the target element if found in the array

function linearsearch(arr, target) {
    if (!(Array.isArray(arr))) {
        return 'enter a valid array'
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i
        }
    } return -1
}

console.log(linearsearch([1, 2, 33, 4, 5], 3));