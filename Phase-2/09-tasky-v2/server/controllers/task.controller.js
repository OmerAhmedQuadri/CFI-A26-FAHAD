import User from "../models/User.js"


export const getTaskByUser = async (req, res) => {
    try {

        const { userId } = req.params
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        res.status(200).json({
            success: true,
            data: user.tasks
        })

    } catch (error) {
        res.status(500).json({
            success: true,
            data: "internal server error"
        })
    }
}




export const createTask = async (req, res) => {
    try {
        const { userId } = req.params
        const { taskname, deadline, priority } = req.body

        if (!taskname || !deadline) {
            return res.status(400).json({
                success: false,
                message: 'Incomplete data'
            })
        }

        if (!priority || !['high', 'medium', 'low'].includes(priority)) {
            return res.status(400).json({
                success: false,
                message: 'Incomplete data'
            })
        }

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        user.tasks.push(req.body)
        await user.save()

        res.status(200).json({
            success: true,
            message: 'Task created successfully',
            data: user.tasks
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

export const updateTask = async (req, res) => {
    try {
        const { userId } = req.params
        const { taskId } = req.params
        const { taskname, deadline, priority } = req.body

        if (!taskname || !deadline) {
            return res.status(400).json({
                success: false,
                message: 'Incomplete data'
            })
        }

        if (!priority || !['high', 'medium', 'low'].includes(priority)) {
            return res.status(400).json({
                success: false,
                message: 'Incomplete data'
            })
        }

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }

        const task = user.tasks.id(taskId)

        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            })
        }

        task.taskname = taskname
        task.deadline = deadline
        task.priority = priority

        await user.save()

        res.status(200).json({
            success: true,
            message: 'Task updated successfully',
            data: task
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { userId } = req.params
        const { taskId } = req.params
        const user = await User.findById(userId)
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "user not found"
            })
        }

        const task = user.tasks.id(taskId)
        if (!task) {
            return res.status(400).json({
                success: false,
                message: "task not found"
            })
        }
        await task.deleteOne()
        await user.save()

        res.json({
            success: true,
            message: "delete task successful"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }

}

export const updatestatus = async (req, res) => {
    try {
        const taskId = req.params.taskId
        const status = parseInt(req.params.status)
        // console.log(req.params);
        // console.log(status);

        if(!(status == 0 || status == 1)){
            return res.send({
                success: false,
                message: "Invalid task status"
            })
        }

        const user = req.user

        if (!user) {
            return res.send({
                success: false,
                message: "User not found"
            })
        }

        const taskIndex = user.tasks.findIndex((task) => task._id == taskId)

        if(taskIndex == -1) {
            return res.send({
                success: false,
                message: 'Task not found'
            })
        }

        user.tasks[taskIndex].isComplete = !!status
        await user.save()

        res.send({
            success: true,
            message: "Task status updated successfully",
            data: user.tasks[taskIndex]
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
            error: error
        })
    }
}