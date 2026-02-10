let num = [21, 23, 34, 65, 76, 98, 104]
let targ = 21
function binarysearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    let mid = (left + right) / 2
    let found = false
    while (right >= left) {

        if (num[mid] == target) {
            found = true
            break;
        }
        else if (num[mid] < target) {
            left = mid + 1

        } else if (num[mid] > target) {
            right = mid - 1

        }
        mid = (left + right) / 2
    }
    if (found) {
        return `element found at index: ${mid}`
    } else {
        return `element is not in the array`
    }

}
console.log(binarysearch(num, targ));

