import express from 'express'
import fs from 'fs/promises'


const app = express()
const PORT = 3000
// console.log(app);

const serverLog = async (req) => {
    const data = `\n${new Date()} ${req.url} ${req.method}`
    await fs.appendFile('./server.log', data)


}

app.use(async (req, res, next) => {
    await serverLog(req)
    next()
})


app.get('/', (req, res) => {
    res.send({
        'allowed operations': {
            add: '/add/n1/n2',
            sub: '/sub/n1/n2',
            mul: '/mul/n1/n2',
            div: '/div/n1/n2',
            mod: '/mod/n1/n2'
        }
    })
})

app.get('/add/:n1/:n2', (req, res) => {
    try {
        const n1 = parseFloat(req.params.n1)
        const n2 = parseFloat(req.params.n2)
        if (Number.isNaN(n1) || Number.isNaN(n2)) return res.send({
            status: false,
            messege: 'enter a valid number',
            data: null
        })
        res.send({
            status: true,
            messege: 'operation successful',
            data: n1 + n2
        })
    }
    catch (error) {
        console.log('operation failed')
        res.send(error)
    }
})

app.get('/sub/:n1/:n2', (req, res) => {
    try {
        const n1 = parseFloat(req.params.n1)
        const n2 = parseFloat(req.params.n2)
        if (Number.isNaN(n1) || Number.isNaN(n2)) return res.send({
            status: false,
            messege: 'enter a valid number',
            data: null
        })
        res.send({
            status: true,
            messege: 'operation successful',
            data: n1 - n2
        })
    }
    catch (error) {
        console.log('operation failed')
        res.send(error)
    }
})

app.get('/mul/:n1/:n2', (req, res) => {
    try {
        const n1 = parseFloat(req.params.n1)
        const n2 = parseFloat(req.params.n2)
        if (Number.isNaN(n1) || Number.isNaN(n2)) return res.send({
            status: false,
            messege: 'enter a valid number',
            data: null
        })
        res.send({
            status: true,
            messege: 'operation successful',
            data: n1 * n2
        })
    }
    catch (error) {
        console.log('operation failed')
        res.send(error)
    }
})

app.get('/div/:n1/:n2', (req, res) => {
    try {
        const n1 = parseFloat(req.params.n1)
        const n2 = parseFloat(req.params.n2)
        if (Number.isNaN(n1) || Number.isNaN(n2)) return res.send({
            status: false,
            messege: 'enter a valid number',
            data: null
        })
        if (n2 == 0) return res.status(400).send({
            status: false,
            messege: 'cannot divide with 0'

        })
        res.send({
            status: true,
            messege: 'operation successful',
            data: n1 / n2
        })
    }
    catch (error) {
        console.log('operation failed')
        res.send(error)
    }
})

app.get('/mod/:n1/:n2', (req, res) => {
    try {
        const n1 = parseFloat(req.params.n1)
        const n2 = parseFloat(req.params.n2)
        if (Number.isNaN(n1) || Number.isNaN(n2)) return res.send({
            status: false,
            messege: 'enter a valid number',
            data: null
        })
        res.send({
            status: true,
            messege: 'operation successful',
            data: n1 % n2
        })
    }
    catch (error) {
        console.log('operation failed')
        res.send(error)
    }
})

app.use((req, res) => {
    res.status(404).send({
        status: false,
        messege: `invalid route , go back to '/' to see all routes`
    })
})

app.listen(PORT, () => {
    console.log('server is listening on port: ' + PORT);
})