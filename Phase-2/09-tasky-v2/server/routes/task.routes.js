import express from 'express'
import { createTask, deleteTask, getTaskByUser, updatestatus, updateTask } from '../controllers/task.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

export const taskRouter = express.Router()

taskRouter.get('/', (req, res) => {
    res.send('task route is working')
})

taskRouter.use(authMiddleware)
taskRouter.get('/:userId', getTaskByUser)
taskRouter.post('/:userId/create', createTask)
taskRouter.post('/:userId/:taskId/update', updateTask)
taskRouter.post('/:userId/:taskId/delete', deleteTask)
taskRouter.put('/updatestatus/:status/:taskId', updatestatus)

taskRouter.use((req, res) => {
    return res.send({
        success: false,
        message: 'Route not found'
    })
})