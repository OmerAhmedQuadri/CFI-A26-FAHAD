import express from 'express'
import dotenv from 'dotenv'

import './config/mongo.config.js'
import { authRouter } from './routes/auth.route.js'

import cookieParser from 'cookie-parser'
import { userRouter } from './routes/user.route.js'
import { urlRouter } from './routes/url.route.js'
import { redirect } from './controllers/url.controller.js'

dotenv.config()
const PORT = process.env.PORT || 3200

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use((req, res, next) => {
    console.log((new Date()).toLocaleTimeString(), req.method, req.url);
    next()
})

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/urls', urlRouter)

app.get('/:shortUrl', redirect)

app.use((req, res) => {
    res.status(404).send({
        success: false,
        message: 'Route Not Found'
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT} ${(new Date()).toLocaleTimeString()}`)
})