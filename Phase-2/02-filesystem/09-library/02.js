import fs from 'fs'
import { question, questionInt } from 'readline-sync'
import chlk from 'chalk'
import chalk from 'chalk'

let db = "./db/games.json"
fs.readFile(db, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    const games = JSON.parse(data)

    while (true) {
        console.log(chalk.bgCyanBright`1: DISPLAY GAMES`);
        console.log(chalk.blue`2: ADD GAMES`);
        console.log(chlk.yellow`3: DELETE GAMES`);
        console.log(chlk.cyanBright`4: UPDATE GAMES`);
        console.log(chlk.green`5: EXIT`);
        

        const choice = questionInt(chlk.magenta`enter your choice: `)
        switch (choice) {
            case 1:
                if (games.length == 0) {
                    console.log(chlk.greenBright("the library is empty"));

                }
                console.log(games);
                break;
            case 2:
                let obj = {}
                obj.id = Date.now()
                obj.name = question(chlk.red`enter name: `)
                obj.year = question(chlk.blue`enter year: `)
                obj.genre = question(chlk.green`enter genre: `)

                games.push(obj)
                break;
            case 3:
                const deletebyname = question(chlk.yellow("enter the game name you wanna delete: "))
                const index = games.findIndex((gem) => gem.name == deletebyname)
                if (index != -1) {
                    games.splice(index, 1)
                    console.log('deleted successfully');
                } else {
                    console.log('game not found');
                }
                break;
            case 4:
                const updatebyname = question("enter the game name you wanna delete: ")
                const index1 = games.findIndex((gem) => gem.name == updatebyname)
                if (index1 != -1) {
                    let game3 = {
                        id: Date.now(),
                        name: question(`enter the name: `),
                        year: question(`enter the year: `),
                        genre: question(`enter the genre: `)
                    }

                    games[index1] = game3
                } else {
                    console.log('game not found');
                }
                break;
            case 5:
                fs.writeFile(db, JSON.stringify(games, null, 4), (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
                return


        }
    }
})