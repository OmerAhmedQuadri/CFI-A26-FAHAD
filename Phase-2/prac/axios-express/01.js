import express from 'express'
import axios from 'axios'

const app = express()
const PORT = 3000
// const city = Hyderabad


app.get('/wttr/:city', async (req, res) => {
    try {
        const city = req.params.city
        const response = await axios.get(`https://wttr.in/${city}?format=j1`)
        res.json(response.data.current_condition)
    }
    catch (error) {
        res.send('failed to fetch')
    }
})

app.listen(PORT, () => {
    console.log('server is listening...');
})

// https://wttr.in/Hyderabad?format=j1