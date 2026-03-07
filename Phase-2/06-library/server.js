import express from 'express'
import { addBook, deleteBook, getAllBooks, getBooksById, updateBook } from './controllers/books.controller.js'

const app = express()
const PORT = 5000

app.use(express.json())

app.get('/api/books', getAllBooks)
app.get('/api/books/:id', getBooksById)
app.post('/api/add', addBook)
app.put('/api/update/:id', updateBook)
app.delete('/api/delete/:id', deleteBook)

app.listen(PORT, () => {
    console.log('server is listening...');
})