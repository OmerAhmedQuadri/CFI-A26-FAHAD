import express from 'express'
import { loginMiddleware, registerMiddleware } from '../middlewares/user.middleware.js'
import { loginUser, registerUser } from '../controllers/user.controller.js'

export const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'router is working'
    })
})

userRouter.post("/register", registerMiddleware, registerUser)
userRouter.post('/login', loginMiddleware, loginUser)

userRouter.use((req, res) => {
    return res.send({
        success: false,
        message: 'Route not found'
    })
})



