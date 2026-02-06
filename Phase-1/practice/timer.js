import readline from 'readline-sync'
console.log("do you want to know the date and time right now");
while (true) {
    let choice = readline.question("yes or no: ")
    let time = new Date()
    if (choice == "yes") {
        console.log(time.toLocaleDateString(undefined, {
            hour: '2-digit',
            minute: '2-digit'
        }));
    } else {
        break;
    }
}
