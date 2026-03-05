import express from 'express'
import fs from 'fs/promises'

const app = express()
const PORT = 3000
const db = './tasks.json'

app.use(express.json())

app.get('/', (req, res) => {
    res.send('server is running')
})

app.get('/api/tasks', async (req, res) => {
    const readalltasks = await readDB()
    res.json(readalltasks)
})

app.get('/api/tasks/:id', async (req, res) => {
    const { id } = req.params
    const tasks = await readDB()
    const task = tasks.find(tsk => tsk.id == id)
    console.log(task);
    if (!task.id) return res.json({ status: false, message: 'task not found' })

    res.json({ status: true, message: 'task found', task: task })
})

// app.post('/api/create', (req, res, next) => {
//     const newTask = req.body
//     if (!newTask.id || !newTask.task) return res.send('invalid task')
// }, async (req, res) => {
//     const tasks = await readDB()
//     const newTask = req.body

//     const index = tasks.findIndex((tsk) => {
//         return tsk.id == newTask.id
//     })

//     if (index != -1) return res.json('task already exists')
//     tasks.push(newTask)
//     await writeDB(tasks)
//     res.send('task created sucessfull', newTask)

// })

const createTaskMiddleware = (req, res, next) => {

    const newTask = req.body
    if (!newTask.id || !newTask.task) return res.send('middleware says invalid data')
    next()

}

const createTaskController = async (req, res) => {
    const tasks = await readDB()
    const newTask = req.body

    const index = tasks.findIndex(task => task.id == newTask.id)
    if (index != -1) return res.send('task already exists')
    console.log(newTask);
    tasks.push(newTask)
    await writeDB(tasks)

    res.send('task created successfully')
}
app.post('/api/create', createTaskMiddleware, createTaskController)



async function readDB() {
    try {
        const data = await fs.readFile(db, 'utf-8')
        // console.log(data);

        return JSON.parse(data)

    } catch (error) {
        console.log('Read DB error: ', error);
    }
}

async function writeDB(tasks) {
    try {
        const data = JSON.stringify(tasks, null, 4)
        await fs.writeFile(db, data)
    } catch (error) {
        console.log('Write DB error: ', error);
    }
}

app.listen(PORT, () => {
    console.log("server is listening");
})