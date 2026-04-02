import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // rating: [Number],
    rating: {
        type: [Number],
        default: []
    }
})

export const Movie = mongoose.model('Movie', movieSchema)