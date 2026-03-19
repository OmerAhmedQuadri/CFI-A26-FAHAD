import express from 'express'
import { verifyEmail, verifyPhone } from '../controllers/auth.controller.js'
export const authRouter = express.Router()

authRouter.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'auth router is working just fine'
    })
})

authRouter.get('/verify/email/:token', verifyEmail)
authRouter.get('/verify/phone/:token', verifyPhone)

authRouter.use((req, res) => {
    return res.send({
        success: false,
        message: 'Route not found'
    })
})