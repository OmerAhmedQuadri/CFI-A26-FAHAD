import React from 'react'

const Slider = ({passwordLength , setpasswordlength}) => {
  return (
    <div className='flex gap-2 justify-center items-center'>
        <label className="my-5 text-white font-bold " htmlFor="slider">Password Length: {passwordLength}</label>
        <input type="range" id="slider" 
        min={4}
        max={15}
        value={passwordLength} className='my-5 w-70' 
        onChange={(e)=>setpasswordlength(e.target.value)}/>
    </div>
  )
}

export default Slider