import fs from 'fs'
import readline from 'readline-sync'

fs.readFile('users.json', 'utf-8', (err, data) => {
    if (err) return console.log(err);
    let obj = data

    obj = JSON.parse(obj, null, 4)
    let newobj = {}
    newobj.name = readline.question(`ENTER A NAME: `)
    newobj.age = readline.questionInt(`ENTER AGE: `)
    newobj.city = readline.question(`ENTER A CITY: `)

    obj.push(newobj)
    obj = JSON.stringify(obj)

    fs.writeFile('users.json', obj, (err) => {
        if (err) return console.log(err);
        console.log(`write successful`);

    })
})