import React from 'react'
import Button from './components/Button'
import Card from './components/Card'

const App = () => {

  return (
    // <div className='flex flex-row gap-5 justify-center items-center h-screen bg-mist-600'>
    //   <Button disabled={false} type={'primary'} text={'Buy Now'} size={'lg'} clickHandler={() => { console.log('button clicked'); }} />
    //   <Button disabled={true} type={'secondary'} text={'Cancel'} size={'lg'} clickHandler={() => { console.log('button clicked'); }} />
    // </div>
    <div>
      <Card/> 
    </div>
  )

}

export default App