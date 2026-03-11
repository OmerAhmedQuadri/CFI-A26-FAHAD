import { Task } from "../models/Task.js";

export const createTask = async (req, res) => {
    try {
        if (!req.body) return res.send('missing body')

        const { task, deadline, priority } = req.body

        if (!task || !deadline || !priority) { return res.send('incomplete or invalid data') }

        const existingTask = await Task.findOne({ task: task })
        if (existingTask) return res.status(400).send({
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
    if (!allTasks) return res.status(400).send({
        success: false,
        message: 'tasks not found',
        data: null
    })
    res.send(allTasks)
}

export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params
        const taskbyid = await Task.findById(id)

        if (id.length != 24) return res.status(400).send({
            success: false,
            message: 'Invalid id length',
            data: null
        })

        if (!taskbyid) return res.status(400).send({
            success: false,
            message: 'Invalid task id',
            data: null
        })

        res.send({
            success: true,
            message: 'Task fetched Successfully',
            data: taskbyid
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Internal Serval Error',
            data: null

        })
    }
}

export const getTaskByPriority = async (req, res) => {
    try {
        const { priority } = req.params
        const taskbypriority = await Task.find({ priority })

        if (!['high', 'medium', 'low'].includes(priority)) return res.status(400).send({
            success: false,
            message: 'Invalid Priority',
            data: null
        })

        if (!taskbypriority) return res.status(400).send({
            success: false,
            message: 'Task not found with priority ' + priority,
            data: null
        })

        res.send({
            success: true,
            message: 'Task fetched Successfully',
            data: taskbypriority
        })
    } catch (error) {
        console.log(error);

        res.status(500).send({
            success: false,
            message: 'Internal Serval Error',
            data: error

        })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        if (id.length != 24) return res.status(400).send({
            success: false,
            message: 'Invalid id length',
            data: null
        })
        const task = await Task.findByIdAndDelete(id)
        console.log(task);

        if (!task) return res.status(400).send({
            success: false,
            message: 'Invalid task id',
            data: null
        })
    } catch (error) {
        console.log(error);

        res.status(500).send({
            success: false,
            message: 'Internal Serval Error',
            data: error

        })
    }

}

export const updateTask = async (req, res) => {
    if (!req.body) return res.status(400).send({
        success: false,
        message: 'body is missing',
        data: null
    })

    const { id, task, deadline, priority, completed } = req.body
    if (!(task || deadline || priority || !(completed == undefined))) return res.status(400).send({
        success: false,
        message: 'enter atleast one parameter',
        data: null
    })

    if (!id || id.length != 24) return res.status(400).send({
        success: false,
        message: 'Invalid id length',
        data: null
    })

    const newTask = await Task.findByIdAndUpdate(id, { task, deadline, priority }, { runValidators: true, new: true })

    if (!newTask) return res.status(400).send({
        success: false,
        message: 'Task Not Found',
        data: null
    })

    res.send({
        sucess: true,
        message: 'task updated successfully',
        data: newTask
    })


}