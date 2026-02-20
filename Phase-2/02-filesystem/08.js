import fs from 'fs'
import readline from 'readline-sync'

fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) return console.log(err);

    let users = JSON.parse(data)
    console.log(users);

    console.log(`OPERATIONS: 
1:DISPLAY USERS
2:ADD USER
3:DELETE USER
4:UPDATE USER`);
    const choice = readline.questionInt(`ENTER A CHOICE: `)
    switch (choice) {
        case 1:
            console.log(users);
            break;
        case 2:
            let newobj = {}
            newobj.name = readline.question(`ENTER A NAME: `)
            newobj.age = readline.questionInt(`ENTER AGE: `)
            newobj.city = readline.question(`ENTER A CITY: `)

            users.push(newobj)

            break;
        case 3:
            const deletename = readline.question(`ENTER THE NAME OF THE USER YOU WANT TO DELETE: `)
            const index = users.findIndex((usr) => usr.name == deletename)
            users.splice(index, 1)
            break;
        case 4:
            const updateuser = readline.question(`ENTER THE NAME OF THE USER YOU WANNA UPDATE: `)
            const index2 = users.findIndex((usr) => usr.name == updateuser)
            const user3 = {
                name: readline.question(`ENTER NAME: `),
                age: readline.questionInt(`ENTER AGE: `),
                city: readline.question(`ENTER CITY: `)
            }
            users[index2] = user3
            break;
        default:
            return;

    }
    fs.writeFile('users.json', JSON.stringify(users, null, 4), (err) => {
        if (err) return console.log(err);
        console.log(`write successful`);
    })
})