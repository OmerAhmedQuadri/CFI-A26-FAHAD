import rs from 'readline-sync'
import axios from 'axios'

const app = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    validateStatus: (status) => status < 500
})

export const getAllTasks = async () => {
    try {
        const response = await app.get('/api/tasks')
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

export const getTaskById = async () => {
    try {
        const id = rs.questionInt('enter id: ')
        const response = await app.get(`/api/tasks/${id}`)
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }

}

export const createTask = async () => {
    try {
        const task = rs.question('Enter the task name: ')
        const deadline = rs.question('Enter the task deadline: ')
        const priority = rs.question('Enter the task priority: ')

        const response = await app.post('/api/tasks/create',
            {
                task,
                deadline,
                priority
            }
        )

        console.log((response.data));

    } catch (error) {
        console.log((error.message));
    }
}
