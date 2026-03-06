import express from 'express'

const app = express()
// console.log(app);
const PORT = 3000

app.get('/',(req,res)=>{
    res.json(`hello world`)
})


app.listen(PORT,()=>{
    console.log(`server is listening...`);
})