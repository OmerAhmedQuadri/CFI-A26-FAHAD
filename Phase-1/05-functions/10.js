//recursive functions

function rec(num) {
    if(num == 5){
        return
    }
    console.log(num++);
    rec(num)
}
rec(1)

//write a program 