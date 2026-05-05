import express from 'express'

export const userRouter = express.Router()


userRouter.use(authMiddleware)
userRouter.get('users',getAllUsers)