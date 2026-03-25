import express from 'express'
import { createTask, deleteTask, getTaskByUser, updateTask } from '../controllers/task.controller.js'

export const taskRouter = express.Router()

taskRouter.get('/', (req, res) => {
    res.send('task route is working')
})

taskRouter.get('/:userId', getTaskByUser)
taskRouter.post('/:userId/create', createTask)
taskRouter.post('/:userId/:taskId/update', updateTask)
taskRouter.post('/:userId/:taskId/delete', deleteTask)

taskRouter.use((req, res) => {
    return res.send({
        success: false,
        message: 'Route not found'
    })
})