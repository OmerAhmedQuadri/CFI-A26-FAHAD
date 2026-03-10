import { Task } from "../models/Task.js";

export const createTask = async(req, res) => {
    try {
        if (!req.body) return res.send('missing body')

        const { task, deadline, priority } = req.body

        if (!task || !deadline || !priority) { return res.send('incomplete or invalid data') }

        const existingTask = Task.findOne({ task: task })
        if (existingTask) return res.send({
            success: false,
            message: 'Task Already Exists',
            data: existingTask
        })

        const newTask = Task({ task, deadline, priority })

        await newTask.save()
        res.send({
            success: true,
            message: 'Task Created Successfully',
            data: newTask
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal Serval Error',
            data: null

        })
    }
}

export const getAllTask = async (req, res) => {
    const allTasks = await Task.find()
    res.send(allTasks)
}

export const getTaskById = async (req, res) => {
    const { id } = req.params
    const taskbyid = await Task.findById(id)
    res.send(taskbyid)
}
