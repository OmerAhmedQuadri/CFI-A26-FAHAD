import express from 'express'
import { dbConnect } from './dbConnect.js'
import { createTask, getAllTask, getTaskById } from './controllers/tasks.controller.js'

const app = express()
const PORT = 9856

app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'server is running'
    })
})

app.get('/api/tasks', getAllTask)
app.get('/api/tasks/:id', getTaskById)

app.post('/api/tasks/create', createTask)

// app.put('/api/tasks/update')

// app.delete('/api/tasks/delete/:id')

app.use((req, res) => {
    res.status(404).send({
        status: false,
        message: 'route not found'
    })
})

await dbConnect()

app.listen(PORT, () => {
    console.log('server is running...');
})