import React from 'react'
import Input from './Input'
import Tasks from './Tasks'

const Card = () => {
  const [task, setTask] = React.useState('')
  const [taskList, setTaskList] = React.useState([])

  function addTask() {
    if (task == '') {
      return
    }

    setTaskList([...taskList, task])

    setTask('')

  }

  function deleteTask(Taskindex) {
    const updatedList = [...taskList]

    updatedList.splice(Taskindex, 1)

    setTaskList(updatedList)

  }
  return (
    <div className='flex flex-col gap-5 justify-start items-center bg-olive-600 rounded-lg h-120 w-100 py-10'>
      <Input
        task={task}
        setTask={setTask}
        addTask={addTask}
      />
      <Tasks
        taskList={taskList}
        deleteTask={deleteTask}
      />
    </div>
  )
}

export default Card