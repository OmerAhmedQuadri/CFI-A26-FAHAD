import fs from 'fs'

fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
    let temp = data

    fs.readFile('file2.txt', 'utf-8', (err, data2) => {
        if (err) console.log(err);
        console.log(data2);
        temp += data2

        fs.writeFile('output.txt', temp, (err) => {
            if (err) console.log(`write failed: ${err}`);
            console.log(`write successful`);
        })
    })
})