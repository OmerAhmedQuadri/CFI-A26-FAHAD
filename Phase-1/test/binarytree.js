import readline from 'readline-sync'
function createTree() {
    let root = readline.questionInt(`ENTER A ROOT NODE VALUE: `)

    let tree = { left: null, val: root, right: null }
    while (true) {
        let num = readline.questionInt(`ENTER A NUMBER: `)
        if (num < tree.val) {
            tree.left = { left: null, val: num, right: null }
        } else if (num > tree.val) {
            tree.right = { left: null, val: num, right: null }
        }

        console.log(tree);
    }

}
createTree()


