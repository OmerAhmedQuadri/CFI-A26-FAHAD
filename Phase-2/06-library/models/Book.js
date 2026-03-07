import fs from 'fs/promises'

export const readdb = async () => {
    const data = await fs.readFile('./books.json', 'utf-8')
    return JSON.parse(data)
}

export const writedb = async (books) => {
    const book = JSON.stringify(books, null, 4)
    await fs.writeFile('./books.json', book)
}

