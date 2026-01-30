import readline from 'readline-sync'

let year = readline.questionInt('enter your year: ')
if ((year + 4) % 2 == 0){
    console.log('it is a leap year');
}else{
    console.log('it is not a leap year');
}