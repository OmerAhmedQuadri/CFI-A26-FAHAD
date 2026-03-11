import express from 'express'
import { dbConnect } from './dbConnect.js'
import { taskRouter } from './routes/task.routes.js'


const app = express()
const PORT = 3000

app.use(express.json())

app.use('/api/tasks', taskRouter)

await dbConnect()

app.listen(PORT, () => {
    console.log('server is running...');
})