import fs from 'fs'

fs.readFile('users.json','utf-8',(err,data)=>{
    if(err) console.log(err);
    console.log(data);
    let obj = JSON.parse(data)
    console.log(obj);
})