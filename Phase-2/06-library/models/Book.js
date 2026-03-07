import fs from 'fs/promises'

const readdb = async () => {
    const data = await fs.readFile('books.json', 'utf-8')
    return JSON.parse(data)
}