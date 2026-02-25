import fs from 'fs'
import rs from 'readline-sync'

const db = './db/books.json'

fs.readFile(db, 'utf-8', (err, data) => {
    if (err) return console.log(err);
    const books = JSON.parse(data)

    while (true) {
        console.log(`1: DISPLAY BOOKS`);
        console.log(`2: ADD BOOKS`);
        console.log(`3: DELETE BOOKS`);
        console.log(`4: UPDATE BOOKS`);
        console.log(`5: EXIT`);

        const choice = rs.questionInt(`Enter your choice: `)

        switch (choice) {
            case 1:
                if (books.length == 0) return console.log('library is empty');
                else {
                    console.log('===LIBRARY===');
                    books.forEach(book => {
                        console.log(`id: ${book.id}`);
                        console.log(`title: ${book.title}`);
                        console.log(`author: ${book.author}`);
                        console.log(`price: ${book.price}`);
                    });
                }
                break;
            case 2:
                let obj = {}
                obj.id = Date.now()
                obj.title = rs.question(`enter title: `)
                obj.author = rs.question(`enter author: `)
                obj.price = rs.questionInt('enter price: ')

                books.push(obj)
                break;
            case 3:
                const deletebyid = rs.questionInt("enter the book id you wanna delete: ")
                const index = books.findIndex((buk) => buk.id == deletebyid)
                if (index != -1) {
                    books.splice(index, 1)
                    console.log('deleted successfully');
                } else {
                    console.log('item not found');
                }
                break;
            case 4:
                const updatebyid = rs.questionInt("enter the book id you wanna delete: ")
                const index1 = books.findIndex((buk) => buk.id == updatebyid)
                if (index1 != -1) {
                    let book3 = {
                        id: Date.now(),
                        title: rs.question(`enter the title: `),
                        author: rs.question(`enter the author: `),
                        price: rs.questionInt(`enter the price: `)
                    }

                    books[index1] = book3
                } else {
                    console.log('book not found');
                }
                break;
            case 5:
                fs.writeFile(db, JSON.stringify(books, null, 4), (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
                return

        }
    }
})
