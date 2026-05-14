import React from 'react'

const Tasks = ({ taskList , deleteTask }) => {
    return (
        <div>
            <ul className='flex flex-col gap-3'>

                {
                    taskList.map((item, index) => {

                        return (
                            <li
                                key={index}
                                className='bg-white p-3 rounded-lg w-90 flex justify-between '
                            >
                                {item}

                                <button
                                    onClick={() => deleteTask(index)}
                                    className='bg-red-500 text-white px-3 py-1 rounded-lg '
                                >
                                    Delete
                                </button>
                            </li>

                        )

                    })
                }
            </ul>
        </div>
    )
}

export default Tasks