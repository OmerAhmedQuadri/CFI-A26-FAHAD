import express from 'express'
import { showUsers } from '../controllers/server.controller.js'
import { showUserMiddleware } from '../middlewares/server.middleware.js'

export const serverRouter = express.Router()

serverRouter.get('/users',showUserMiddleware ,showUsers)


serverRouter.use((req,res)=>{
    res.send('route not found')
})