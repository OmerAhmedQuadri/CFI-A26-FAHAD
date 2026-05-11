import express, { Router } from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { createShortUrl } from '../controllers/url.controller.js'


export const urlRouter = express.Router()

urlRouter.use(authMiddleware)
urlRouter.post('/create',createShortUrl)
