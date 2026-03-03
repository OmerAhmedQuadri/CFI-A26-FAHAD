import bcrypt, { compare } from 'bcrypt'
import { question, questionInt } from 'readline-sync'
import { hashPassword, checkPassword } from './auth.js'
import { readFile, writeFile } from 'fs/promises'

let userDB = './users.json'

const readDB = async () => {
    return JSON.parse(await readFile(userDB, 'utf-8'))
}

const writeDB = async (users) => {
    return await writeFile(userDB, JSON.stringify(users, null, 4))
}

console.log(`1: Signup
2: login
3: exit`);
let choice = questionInt(`ENTER YOUR CHOICE: `)
switch (choice) {
    case 1:
        let username = question(`ENTER YOUR USERNAME: `)
        let password = question(`ENTER YOUR PASSWORD: `)
        let users = await readDB()
        let checkDB = users.find((user) => {
            return user.username == username
        })
        if (checkDB) {
            console.log(`user already exists`);
            break;
        }
        let hashed = await hashPassword(password)
        users.push({ username: username, password: hashed })
        await writeDB(users)
        break;
    case 2:
        let username1 = question(`ENTER YOUR USERNAME: `)
        let password1 = question(`ENTER YOUR PASSWORD: `)

        let users1 = await readDB()
        let find = users1.find((usr) => {
            return usr.username == username1
        })
        if (!find) {
            console.log("user does not exist");
            break;
        }
        let match = await bcrypt.compare(password1, find.password)
        if (match) {
            console.log(`LOGIN SUCCESSFUL`);
        } else {
            console.log(`INVALID PASSWORD`);
        }
}