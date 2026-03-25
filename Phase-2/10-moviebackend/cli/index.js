import rs from 'readline-sync'
import { createMovie, getAllMovies, rateMovie } from './controllers.js';

const cli = async () => {

    const OPTIONS = {
        1: getAllMovies,
        2: createMovie,
        3: rateMovie
    }

    while (true) {
        console.log('===MOVIES===');
        console.log('1. Get all movies');
        console.log('2. List a New Movie');
        console.log('3. Rate a Movie');
        console.log('0. Exit');
        const choice = rs.questionInt('Enter your choice: ')

        if (!choice) return console.log('Exiting...');
        if (!OPTIONS[choice]) {
            console.log('Invalid Choice!');
            continue
        }
        await OPTIONS[choice]()
    }
}

cli()