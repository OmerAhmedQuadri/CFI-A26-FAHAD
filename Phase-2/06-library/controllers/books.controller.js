import { readdb, writedb } from "../models/Book.js";

export const getAllBooks = async (req, res) => {
    const books = await readdb()
    res.json(books)
}

export const getBooksById = async (req, res) => {
    const { id } = req.params
    const books = await readdb()
    const bookbyid = books.find(bk => bk.id == id)
    if (!bookbyid) return res.json({ status: 404, message: 'invalid id' })
    res.json(bookbyid)
}

export const addBook = async (req, res) => {
    const books = await readdb()
    const id = books.length + 1
    const { author, title, price } = req.body
    if (!(author || title || price)) return res.json({ status: 400, message: 'enter atleast one parameter' })
    const newBook = { id, author, title, price }
    books.push(newBook)
    await writedb(books)
    res.json({ status: 200, message: 'book added successfull', Book: newBook })

}

export const updateBook = async (req, res) => {
    const { id } = req.params
    const { author, title, price } = req.body
    const books = await readdb()
    const index = books.findIndex(ind => ind.id == id)
    if (index == -1) return res.json({ status: 404, message: 'book does not exist' })
    if (!(author || title || price)) return res.json({ status: 400, message: 'enter atleast one parameter' })
    const updatedBook = { id, author, title, price }
    books[index] = updatedBook
    await writedb(books)
    res.json({ status: 200, message: 'updated successfully' })
}

export const deleteBook = async (req, res) => {
    const { id } = req.params
    const books = await readdb()
    const index = books.findIndex(bk => bk.id == id)
    if (index == -1) return res.json({ status: 404, message: 'invalid id' })
    books.splice(index, 1)
    await writedb(books)
    res.json({ status: 200, message: 'deleted successfully' })
}