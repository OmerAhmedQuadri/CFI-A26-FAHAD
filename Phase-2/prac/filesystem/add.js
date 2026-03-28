import fs from 'fs'

fs.readFile('file.json', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    const parsed = JSON.parse(data)

    const user = {
        name: "hello",
        age: "hi"
    }

    parsed.push(user)


    
    fs.writeFile('file.json', JSON.stringify(parsed), (err) => {
    
    })

})