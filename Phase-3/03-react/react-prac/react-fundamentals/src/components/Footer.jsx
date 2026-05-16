import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white mx-2.5 mb-2.5 rounded-2xl px-8 py-6 flex flex-col md:flex-row justify-between items-center border border-slate-700'>

      <div>
        <h1 className='text-2xl font-bold text-cyan-400'>
          CYTRO
        </h1>

        <p className='text-slate-400 text-sm mt-1'>
          Modern UI. Clean design.
        </p>
      </div>

      <div className='flex gap-6 text-slate-300 mt-4 md:mt-0'>
        <a href="#" className='hover:text-cyan-400 transition'>
          Home
        </a>

        <a href="#" className='hover:text-cyan-400 transition'>
          Products
        </a>

        <a href="#" className='hover:text-cyan-400 transition'>
          Contact
        </a>
      </div>

      <p className='text-slate-500 text-sm mt-4 md:mt-0'>
        © 2026 CYTRO
      </p>

    </footer>
  )
}

export default Footer