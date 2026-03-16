import express from 'express'
import dotenv from 'dotenv'
import { router } from './routes/user.routes.js'
dotenv.config()

const server = express()
const PORT = process.env.PORT

server.use('/api/users', router)

server.use((req, res) => {
    res.send({
        status: false,
        message: 'route not found'
    })
})

server.listen(PORT, () => {
    console.log('server is listening at ' + PORT);
})