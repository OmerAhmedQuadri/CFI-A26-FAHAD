import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import movieRouter from './routes/movies.routes.js'
dotenv.config()

const server = express()
const PORT = process.env.PORT
const db = process.env.MONGO_URL

server.use(express.json())

server.get('/', (req, res) => {
    res.send('server is working')
})

server.use('/movies', movieRouter)

await mongoose.connect(db)

server.use((req, res) => {
    return res.send({
        success: false,
        message: 'Route not found'
    })
})


server.listen(PORT, () => {
    console.log('server is running at port: ' + PORT);
})