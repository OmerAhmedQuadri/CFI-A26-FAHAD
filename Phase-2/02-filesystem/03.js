import fs from "fs";

const data = 'this is a write operation using fs'
fs.writeFile('output.txt', data, (error) => {
    if (error) {
        console.log(`write file error: ${error}`);
        return
    }
    console.log(`write successful`);
})


