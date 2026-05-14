import React from 'react'

const Tasks = ({ taskList }) => {
    return (
        <div>
            <ul className='flex flex-col gap-3'>

                {
                    taskList.map((item, index) => {

                        return (
                            <li
                                key={index}
                                className='bg-white p-3 rounded-lg w-90'
                            >
                                {item}
                            </li>
                        )

                    })
                }
            </ul>
        </div>
    )
}

export default Tasks