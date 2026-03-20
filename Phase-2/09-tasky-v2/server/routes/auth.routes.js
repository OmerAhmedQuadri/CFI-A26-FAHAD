import express from 'express'
import { adminVerifyEmail, adminVerifyPhone, userVerifyEmail, userVerifyPhone } from '../controllers/auth.controller.js'
export const authRouter = express.Router()

authRouter.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'auth router is working just fine'
    })
})

authRouter.get('/user/verify/email/:token', userVerifyEmail)
authRouter.get('/user/verify/phone/:token', userVerifyPhone)

authRouter.get('/admin/verify/email/:token', adminVerifyEmail)
authRouter.get('/admin/verify/phone/:token', adminVerifyPhone)

authRouter.use((req, res) => {
    return res.send({
        success: false,
        message: 'Route not found'
    })
})