import React from 'react'

const Hero = ({ heroText, desc , heroButton }) => {
    return (
        <div className='text-white flex flex-col justify-center items-center bg-slate-800 ml-2.5 mb-2.5 rounded-lg w-310 h-110 border border-slate-600'>
            <div className='font-bold text-6xl'>
                <h1>{heroText}</h1>
            </div>
            <div className='mt-7 text-2xl'>
                <h2>{desc}</h2>
            </div>
            <div className='mt-10 p-5 bg-slate-400 rounded-2xl font-bold border cursor-pointer hover:bg-slate-500 transiton duration-300'>
                <button>
                    {heroButton}
                </button>
            </div>
        </div>
    )
}

export default Hero