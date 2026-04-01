import express from 'express'
import d from 'dotenv'
import { serverRouter } from './routes/server.routes.js'
d.config()

const app = express()
// console.log(app);
const PORT = process.env.SERVER_NUMBER

app.use(express.json())

app.use('/fahad.com', serverRouter)


app.listen(PORT)