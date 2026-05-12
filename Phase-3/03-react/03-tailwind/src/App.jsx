import React from 'react'

const App = () => {
  const [count, setCount] = React.useState(0)
  function increase() {
    setCount(count + 1)
  }

  function decrease() {
    setCount(count - 1)
  }

  const green = 'text-green-300'
  const red = 'text-red-300'
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className={`text-9xl ${count >= 0 ? green : red}`}>Colour: {count}</h1>
      <div className='flex gap-10 m-10'>
        <button onClick={increase} className='bg-amber-400 px-9 py-2 rounded-2xl text-white font-bold' >Increment</button>
        <button onClick={decrease} className='bg-gray-400 px-9 py-2 rounded-2xl text-white font-bold'>Decrement</button>
      </div>
    </div>
  )
}

export default App