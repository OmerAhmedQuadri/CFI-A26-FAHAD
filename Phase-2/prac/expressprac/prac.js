import express from 'express'
import mongoose from 'mongoose'
import d from 'dotenv'
import { serverRouter } from './routes/server.routes.js'
import { dbconnect } from './config/dbconnect.js'
d.config()

const app = express()
const PORT = process.env.SERVER_NUMBER

app.use(express.json())

app.use('/fahad.com', serverRouter)


await dbconnect()
app.listen(PORT)