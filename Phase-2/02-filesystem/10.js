import { log } from 'console'
import fs from 'fs'

let username
fetch(`https://api.github.com/users`)
    .then(res => {
        if (!res.ok) throw new Error("boohoo");
        return res.json()

    }).then((res) => {
        console.log(res);
        res = res.map((ele) => {
            return { id: ele.id, login: ele.login }
        })
        res = res.filter((ele) => {
            return ele.id % 2 == 0
        })
        fs.writeFile('./fetched.json', JSON.stringify(res, null, 4), (err) => {
            if (err) {
                return err
            }
            console.log('write successful');
        })

    }).catch((err) => {
        console.log(err);
    })

