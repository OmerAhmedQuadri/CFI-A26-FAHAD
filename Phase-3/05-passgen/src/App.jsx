import React from 'react'
import Input from './components/Input'
import Slider from './components/Slider'

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-mauve-700'>
      <Input />
      <Slider />
    </div>
  )
}

export default App