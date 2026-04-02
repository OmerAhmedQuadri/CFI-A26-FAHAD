import axios from 'axios'
import rs from 'readline-sync'
import chalk from 'chalk'

export const getAllMovies = async () => {
    const response = await axios.get("http://localhost:3000/movies/display")
    console.log({
        message: response.data.message,
    });
    if (!response.data.success) {
        console.log("Internal server error");
    }
    response.data.data.forEach(movie => {
        console.log(chalk.greenBright(movie.title), chalk.yellowBright(movie.rating));
    });
}

export const createMovie = async () => {
    try {
        const title = rs.question(`Enter the title of the movie: `)
        const description = rs.question(`Enter the description of the movie: `)

        const response = await axios.post("http://localhost:3000/movies/create", {
            title, description
        })

        console.log({
            message: response.data.message,
            data: response.data.data
        });
    } catch (error) {
        console.log(error);
    }
}

export const rateMovie = async () => {
    const id = rs.question(`Enter the id of the movie: `)
    const rating = rs.questionInt(`Enter a number you wanna rate: `)

    const response = await axios.put(`http://localhost:3000/movies/${id}/rating`, { rating })

    console.log({
        message: response.data.message,
        data: response.data.data
    });

}
