const inputBox = document.getElementById('task-input')
const submitBtn = document.getElementById('task-btn')
const taskList = document.getElementById('task-list')

submitBtn.addEventListener('click', () => {
    const newTask = inputBox.value.trim()
    if (!newTask) return
    const li = document.createElement('li')
    const task = document.createElement('p')
    const deleteBtn = document.createElement('button')
    task.innerText = newTask
    deleteBtn.innerText = "Delete"
    li.append(task, deleteBtn)
    taskList.append(li)
    inputBox.value = ''
})