import express from 'express'
import { createTask, deleteTask, getAllTask, getTaskById, getTaskByPriority, updateTask } from '../controllers/tasks.controller.js'


export const taskRouter = express.Router()

taskRouter.get('/', getAllTask)
taskRouter.get('/:id', getTaskById)
taskRouter.get('/priority/:priority', getTaskByPriority)
taskRouter.post('/create', createTask)
taskRouter.put('/update', updateTask)
taskRouter.delete('/delete/:id', deleteTask)

taskRouter.use((req, res) => {
    res.status(404).send({
        status: false,
        message: 'task route not found'
    })
})