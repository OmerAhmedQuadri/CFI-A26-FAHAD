//callback functions allows interaction between two functions
function sayHello(name) {
    console.log('hello world ' + name);
    console.log('this is inside second function');
}

function pleaseCallThis(func) {
    console.log('this is inside 1st function');
    func('fahad')
}

pleaseCallThis(sayHello)

pleaseCallThis(sayHello)

pleaseCallThis((ele) => {
    console.log('helloji ' + ele);
})

