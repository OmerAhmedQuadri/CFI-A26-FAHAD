const inputBox = document.getElementById('input')
const addBtn = document.getElementById('btn')
const taskList = document.getElementById('task-list')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTasks() {
    taskList.innerText = ''

    if (tasks.length === 0) {
        taskList.innerText = 'No tasks found'
        return
    }

    tasks.forEach(task => {
        const li = document.createElement('li')
        const p = document.createElement('p')
        const deleteBtn = document.createElement('button')

        p.innerText = task.name
        deleteBtn.innerText = 'Delete'

        if (task.completed) {
            li.classList.add('completed')
        }

        li.addEventListener('click', function () {
            task.completed = !task.completed
            saveTasks()
            renderTasks()
        })

        deleteBtn.addEventListener('click', function (e) {
            e.stopPropagation()
            tasks = tasks.filter(t => t.id !== task.id)
            saveTasks()
            renderTasks()
        })

        li.append(p, deleteBtn)
        taskList.append(li)
    })
}

addBtn.addEventListener('click', function () {
    const taskName = inputBox.value.trim()

    if (!taskName) return

    const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false
    }

    tasks.push(newTask)
    saveTasks()
    renderTasks()

    inputBox.value = ''
})

renderTasks()
// inputBox.focus()