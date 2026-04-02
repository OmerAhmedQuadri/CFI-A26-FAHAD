import { Movie } from "../models/Movie.js"

export const displayMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        if (!movies.length) {
            return res.status(400).json({
                success: false,
                message: 'NO MOVIES AVAILABLE'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Movies fetched successfully',
            data: movies
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

export const createMovie = async (req, res) => {
    try {
        const { title, description } = req.body

        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title is missing"
            })
        }

        if (!description) {
            return res.status(400).json({
                success: false,
                message: "description is missing"
            })
        }

        const newMovie = {
            title, description
        }
        console.log(newMovie);
        const data = await Movie.create(newMovie)

        res.status(200).json({
            success: true,
            message: 'Movie created successfully',
            data: data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

export const rateMovie = async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findById(id)

        if (!movie) {
            return res.status(404).json({
                success: false,
                message: 'Movie not found'
            })
        }

        const { rating } = req.body

        if (rating === undefined || rating < 1 || rating > 5) {
            return res.status(400).json({
                success: false,
                message: 'Rating must be a number between 1 and 5'
            })
        }

        movie.rating.push(rating)
        await movie.save()

        res.status(200).json({
            success: true,
            message: 'ratings created successfully',
            data: movie
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }

}