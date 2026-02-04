//write a function that takes user input for username and user role and prints it to the console
import readline from 'readline-sync'
// function userDetails() {
//     let name = readline.question("enter your username: ")
//     let role = readline.question("enter your role: ")
//     let details = {}
//     details.username = name
//     details.userrole = role
//     console.log(details);

// }
function userDetails() {
    let name = readline.question("enter your username: ")
    let role = readline.question("enter your role: ")
    let user = {
        username: name,
        userrole: role
    }
    // console.log(name);
    // console.log(role);
    return user

}

let deets = userDetails()
console.log(deets);
console.log(typeof userDetails);