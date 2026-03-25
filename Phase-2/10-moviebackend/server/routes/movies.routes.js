import express from 'express'
import { createMovie, displayMovies, rateMovie } from '../controllers/movies.controller.js'

const Router = express.Router()

Router.get('/display', displayMovies)
Router.post('/create', createMovie)
Router.put('/:id/rating',rateMovie)

Router.use((req, res) => {
    return res.send({
        success: false,
        message: 'Route not found'
    })
})

export default Router