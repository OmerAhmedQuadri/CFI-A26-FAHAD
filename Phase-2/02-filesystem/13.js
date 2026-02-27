import fs from 'fs/promises'
import readline from 'readline-sync'

let filename = './tasks.json'

async function createtask() {
    let data
    try {
        data = await fs.readFile(filename, 'utf-8')
        data = JSON.parse(data)
    } catch (error) {
        data = []
        await fs.writeFile(filename, data)
    }
    let create = {
        id: Date.now(),
        task: readline.question("ENTER THE TASK: "),
        deadline: readline.question("ENTER THE DEADLINE: "),
        priority: readline.question("ENTER PRIORITY STATUS: ")
    }

    data.push(create)
    await fs.writeFile(filename, JSON.stringify(data, null, 4))
    console.log('TASK CREATED SUCCESFULLY');

}

// createtask()

async function updatetask() {
    let data = await fs.readFile(filename, 'utf-8')
    data = JSON.parse(data)
    let update = readline.question("ENTER THE TASK YOU WANNA UPDATE: ")
    let index = data.findIndex((tsks) => {
        return tsks.task == update
    })


    data[index].task = readline.question("ENTER THE TASK: "),
        data[index].deadline = readline.question("ENTER THE DEADLINE: "),
        data[index].priority = readline.question("ENTER PRIORITY STATUS: ")


    await fs.writeFile(filename, JSON.stringify(data, null, 4))
    console.log('TASK updated SUCCESFULLY');
}

// updatetask()

async function printtask() {
    let data = await fs.readFile(filename, 'utf-8')
    console.log(data);
}
// printtask()

async function deletetask() {
    let data = await fs.readFile(filename, 'utf-8')
    data = JSON.parse(data)
    let deletetsk = readline.question("ENTER THE TASK YOU WANNA DELETE: ")
    let index = data.findIndex((tsks) => {
        return tsks.task == deletetsk
    })

    data.splice(index, 1)
    await fs.writeFile(filename, JSON.stringify(data, null, 4))
    console.log('TASK deleted SUCCESFULLY');

}
// deletetask()

while (true) {
    console.log(`===TASKY=== 
1: CREATE TASK
2: UPDATE TASK
3:PRINT TASKS
4:DELETE TASKS
5: EXIT`);

    let choice = readline.questionInt("ENTER YOUR CHOICE: ")
    if (choice == 5) {
        console.log('byebye');
        break;
    }

    switch (choice) {
        case 1:
            await createtask()
            break;
        case 2:

            await updatetask()
            break;
        case 3:
            await printtask()
            break;
        case 4:
            await deletetask()
            break;
        default:
            console.log("enter a valid choice");
            break;
    }
}