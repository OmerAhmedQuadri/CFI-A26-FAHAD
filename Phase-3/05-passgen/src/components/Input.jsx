import React from 'react'

const Input = () => {
  return (
    <div className='flex justify-between '>
      <button className='bg-purple-600 text-white px-5 py-1 rounded-lg mx-2 cursor-pointer'>generate</button>
        <input type="text" className='bg-mauve-400 outline-0 rounded-lg px-3' />
        <button className='bg-purple-800 text-white px-5 py-1 rounded-lg mx-2 cursor-pointer'>Copy</button>
    </div>
  )
}

export default Input