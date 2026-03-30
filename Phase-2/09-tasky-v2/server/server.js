import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './dbConnect.js'
import cors from 'cors'
import './seeds/admin.seed.js'
import { userRouter } from './routes/user.routes.js'
import { authRouter } from './routes/auth.routes.js'
import { adminRoutes } from './routes/admin.routes.js'
import { taskRouter } from './routes/task.routes.js'
import { sendEmail } from './services/email.service.js'
dotenv.config()

const server = express()
const PORT = process.env.PORT

server.use(cors())
server.use(express.json())

server.get("/sendemail", sendEmail)

server.use('/api/users', userRouter)
server.use("/api/auth", authRouter)
server.use('/api/admins', adminRoutes)
server.use('/api/tasks', taskRouter)

server.use((req, res) => {
    res.send({
        status: false,
        message: 'route not found'
    })
})

dbConnect()

server.listen(PORT, () => {
    console.log('server is listening at ' + PORT);
})