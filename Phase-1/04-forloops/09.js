import readline from 'readline-sync'
let rows = readline.questionInt("enter the number of rows: ")
let matrix = Array(rows)

for (let i = 0; i < matrix.length; i++) {
    let cols = readline.questionInt("Enter the number of columns: ")
    matrix[i] = Array(cols)
    for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = readline.questionInt('enter the elements: ')
    }
} console.log(matrix);