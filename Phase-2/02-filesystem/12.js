import fs from 'fs/promises'
import chalk from 'chalk'

let usersDB = './fetched.json'

async function fetchUsers() {
    const res = await fetch('https://api.github.com/users')

    if (!res.ok) {
        return false
    }
    return res.json()
}

async function saveUsers(users) {
    let data = JSON.stringify(users, null, 4)
    try {
        await fs.writeFile(usersDB, data)
        console.log("write successful");//this fs wont take callback function cuz we aint importing js fs we importing fs/promises
    } catch (error) {
        throw error

    }
}

async function main() {
    let users = await fetchUsers()
    users = users.map((ele) => {
        return { id: ele.id, login: ele.login }
    })
    users = users.filter((ele) => {
        return ele.id % 2 == 0
    })
    await saveUsers(users)
}

main()