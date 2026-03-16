import express from 'express'

export const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'router is working'
    })
})



