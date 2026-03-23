import express from 'express'
import { createTask, getTaskByUser, updateTask } from '../controllers/task.controller.js'

export const taskRouter = express.Router()

taskRouter.get('/:userId', getTaskByUser)
taskRouter.post('/:userId/create', createTask)
taskRouter.post('/:userId/:taskId/update', updateTask)