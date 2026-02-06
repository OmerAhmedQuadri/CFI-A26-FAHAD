//write a fucntion 2 inputs arr and target and rreturns the index of the target element if found in the array
import readline from 'readline-sync'
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


(function wrap() {
    while (true) {
        console.log("1.linear search\n2.exit");
        let choice = readline.questionInt("enter your choice: ")
        switch (choice) {
            case 1:
                let size = readline.questionInt("enter the size of the array: ")
                let num = []
                for (let i = 0; i < size; i++) {
                    num.push(readline.questionInt(`enter the ${i} element: `))
                }
                let target = readline.questionInt("enter the target element: ")
                let op = linearsearch(num, target)
                if (op == -1) {
                    console.log('element not found');
                }
                else if (op == undefined) {
                    console.log('enter a valid array');
                }
                else {
                    console.log('element found at', op);
                }
                break;
            default:
                return
        }
    }
})()

