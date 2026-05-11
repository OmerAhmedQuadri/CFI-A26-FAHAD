import express from 'express'
import { getAllUsers } from '../controllers/user.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

export const userRouter = express.Router()

userRouter.use(authMiddleware)
userRouter.get('users',getAllUsers)