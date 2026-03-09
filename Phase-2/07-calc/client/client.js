import rs from 'readline-sync'
import axios from 'axios'
const BASE_URL = 'http://localhost:3000/'

const fetch = async (operation) => {
    const num1 = rs.question(`ENTER A NUMBER: `)
    const num2 = rs.question(`ENTER A NUMBER: `)

    const response = await axios.get(BASE_URL + operation + '/' + num1 + '/' + num2)
    console.log(`message: ` + response.data.messege)
    console.log(`answer: ` + response.data.data)
}

const cli = async () => {
    const ops = {
        1: 'add',
        2: 'sub',
        3: 'mul',
        4: 'div',
        5: 'mod'
    }
    console.log(`===CLI CALC===
1: ADD
2: SUB
3: MUL
4: DIV
5: MOD
0: EXIT`);

    const choice = rs.questionFloat(`ENTER YOUR CHOICE: `)
    if (choice === 0) return console.log(`Exiting...`);
    if (!ops[choice]) return console.log(`INVALID OPTION`);
    await fetch(ops[choice])

}
cli()