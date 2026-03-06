import express from 'express'

const app = express()
const PORT = 3000
// console.log(app);

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/users/:username', (req, res) => {

    // const username = req.params.username

    res.send({
        name: req.params.username,
        role: 'developer'
    })
})

app.listen(PORT, () => {
    console.log(`SERVER IS LISTENING AT http://localhost:${PORT}`);
})