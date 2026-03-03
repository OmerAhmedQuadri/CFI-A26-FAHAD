import bcrypt from 'bcrypt'
import { question, questionInt } from 'readline-sync'
import { readFile, writeFile } from 'fs/promises'

const userdb = './pin.json'

const hashPass = (password) => bcrypt.hash(password, 10)
const checkPass = (password, hash) => bcrypt.compare(password, hash)

const readDB = async () => {
    try {
        const data = await readFile(userdb, 'utf-8')
        return JSON.parse(data)
    } catch {
        return []
    }
}

const writeDB = async (data) => {
    await writeFile(userdb, JSON.stringify(data, null, 2))
}

console.log(`== PIN SYSTEM ==
1: SET PIN
2: UNLOCK USING PIN
3: EXIT`)

const choice = questionInt('ENTER A CHOICE: ')

if (choice === 1) {
    let pin

    while (true) {
        pin = questionInt('ENTER NEW PIN: ')
        if (pin.toString().length < 4) {
            console.log('PIN IS WEAK (min 4 digits)')
        } else {
            break
        }
    }

    const hash = await hashPass(pin.toString())
    await writeDB([{ pin: hash }])

    console.log('NEW PIN SET')
}

if (choice === 2) {
    const pin = question('ENTER THE PIN: ')
    const users = await readDB()

    if (users.length === 0) {
        console.log('NO PIN SET')
        process.exit()
    }

    const isValid = await checkPass(pin, users[0].pin)

    if (isValid) {
        console.log('LOGIN SUCCESSFUL')
    } else {
        console.log('INVALID PIN')
    }
}