import express from 'express'
import { showHome } from '../controllers/server.controller.js'

export const serverRouter = express.Router()

serverRouter.get('/', showHome)
serverRouter.get('/users', (req, res) => {
    res.send('hellow world')
})

serverRouter.use((req,res)=>{
    res.send('route not found')
})