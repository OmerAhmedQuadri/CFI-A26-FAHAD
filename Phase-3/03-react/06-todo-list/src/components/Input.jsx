import React from 'react'

const Input = ({ task, setTask, addTask }) => {



    return (
        <div>
            <div className='flex gap-2'>
                <input type="text" placeholder='Write Task...' className='bg-white rounded-lg p-3 w-70'
                    value={task}
                    onChange={(e) => {
                        setTask(e.target.value)
                    }} />

                <button className='bg-amber-300 p-2  px-4 py-3 rounded-lg ' onClick={addTask }>+</button>
            </div>
        </div>
    )
}

export default Input