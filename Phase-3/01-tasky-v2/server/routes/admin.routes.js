import express from 'express'
import { adminLoginMiddleware, assignTaskMiddleware } from '../middlewares/admin.middleware.js'
import { adminLogin, assignTask, createUser, getAllUsers, updateUserStatus } from '../controllers/admin.controller.js'
import { registerMiddleware } from '../middlewares/user.middleware.js'
import { adminAuthMiddleware } from '../middlewares/auth.middleware.js'

export const adminRoutes = express.Router()

adminRoutes.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'admin adminRoutes is working just fine'
    })
})

adminRoutes.post('/login', adminLoginMiddleware, adminLogin)

adminRoutes.use(adminAuthMiddleware)
adminRoutes.get('/getAllUsers', getAllUsers)
// adminRoutes.get('/getUser/:id', getUserById)  // TODO

adminRoutes.post('/create-user', registerMiddleware, createUser)
adminRoutes.post('/assign-task', assignTaskMiddleware, assignTask)
adminRoutes.put('/update/user-status', updateUserStatus)
// adminRoutes.delete('/delete-user/:userId', deleteUser)  // TODO

adminRoutes.use((req, res) => {
    return res.send({
        success: false,
        message: 'Admin route not found'
    })
})


export default adminRoutes

/*
    GET:
        - get admin details
        - get user details
        - get all users
        
    POST:
        - create user
        - assign tasks

    PUT:
        - update user details
        - ban / disable users

    DELETE:
        - delete user

*/