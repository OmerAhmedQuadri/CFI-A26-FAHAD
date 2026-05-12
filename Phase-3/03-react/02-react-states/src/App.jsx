import React from 'react'

const App = () => {
  const [count, setCount] = React.useState(0)
  function increase() {
    setCount(count + 1)
  }

  function decrease() {
    setCount(Math.max(0, count - 1))
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'maroon'
      }}>
      <h1 style={{
        color: 'white',
        fontFamily: 'arial',
        margin: '10px',
        fontSize:'60px'
      }}>Counter: {count}</h1>
      <div style={{
        display:'flex',
        gap:'10px'
      }}>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
      </div>
    </div>
  )
}

export default App

