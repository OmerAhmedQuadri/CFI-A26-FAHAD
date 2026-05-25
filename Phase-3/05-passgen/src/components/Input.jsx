import React from 'react'

const Input = ({ password, generatePassword, copied , copyPassword }) => {
  return (
    <div className='flex justify-between '>
      <button
        className='bg-purple-600 hover:bg-purple-500 transition duration-300 text-white px-5 py-1 rounded-lg mx-2 cursor-pointer ' onClick={(e) => { generatePassword(e.target.value) }}>
        generate
      </button>
      <input type="text" readOnly className='bg-mauve-300 outline-0 rounded-lg px-3' value={password} />
      <button
        className={`${copied ? 'bg-pink-700 hover:bg-pink-900' : 'bg-purple-800 hover:bg-purple-900'} transition duration-300 text-white px-5 py-1 w-25  rounded-lg mx-2 cursor-pointer`} onClick={(e) => {copyPassword(e.target.value)}}>
        {`${copied ? 'copied' : 'copy'}`}
      </button>
    </div>
  )
}

export default Input