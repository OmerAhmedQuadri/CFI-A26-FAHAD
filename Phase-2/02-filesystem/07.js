import fs from 'fs'
import readline from 'readline-sync'

fs.readFile('users.json', 'utf-8', (err, data) => {
    if (err) return console.log(err);
    // let obj = data

    let arr = JSON.parse(data, null, 4)
    let newobj = {}
    newobj.name = readline.question(`ENTER A NAME: `)
    newobj.age = readline.questionInt(`ENTER AGE: `)
    newobj.city = readline.question(`ENTER A CITY: `)

    arr.push(newobj)
    arr = JSON.stringify(arr)

    fs.writeFile('users.json', arr, (err) => {
        if (err) return console.log(err);
        console.log(`write successful`);

    })
})