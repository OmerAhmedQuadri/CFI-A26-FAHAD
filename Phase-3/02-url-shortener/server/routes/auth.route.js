import express from 'express'
import { loginMiddleware, registerMiddleware } from '../middlewares/auth.middleware.js'
import { login, register, resendRegisterOtp, validateUserRegistration } from '../controllers/auth.controller.js'

export const authRouter = express.Router()

authRouter.post('/register', registerMiddleware, register)
authRouter.post('/register/verify-otp', validateUserRegistration)
authRouter.post('/register/resend-otp', resendRegisterOtp)

authRouter.post('/login', loginMiddleware, login)


