import express from 'express'
import { loginMiddleware, registerMiddleware } from '../middlewares/admin.middleware.js'
import { loginAdmin, registerAdmin } from '../controllers/admin.controller.js'

export const adminRoutes = express.Router()

adminRoutes.get('/', (req, res) => {
    res.send('admin route is working')
})

adminRoutes.post('/register', registerMiddleware, registerAdmin)
adminRoutes.post('/login', loginMiddleware, loginAdmin)

adminRoutes.use((req, res) => {
    return res.send({
        success: false,
        message: 'Route not found'
    })
})
