import React from 'react'

const Navbar = ({logoText}) => {
  return (
    <div className='text-white flex justify-between items-center ml-2.5 mt-1 mb-2.5 bg-slate-700 rounded-lg w-310 h-20 border border-slate-500'>
        <div className='ml-4.5 font-bold text-slate-200 text-2xl'>
          <h1 className='text-2xl font-bold text-cyan-400'>
          {logoText}
        </h1>
        </div>
        <div className='mr-4.5 font-bold text-slate-200 text-m flex gap-5'>
          <button className='cursor-pointer hover:scale-105 transition duration-300'>Home</button>
          <button className='cursor-pointer hover:scale-105 transition duration-300'>Products</button>
          <button className='cursor-pointer hover:scale-105 transition duration-300'>Contact</button>
        </div>
    </div>
  )
}

export default Navbar