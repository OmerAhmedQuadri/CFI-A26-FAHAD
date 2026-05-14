import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'

const App = () => {



  return (
    <div className='bg-black min-h-screen pt-2.5 pb-1'>
      <Navbar logoText={'Learning React'} />
      <Hero heroText={'Welcome to Product Page'} desc={'This project is to show product cards'} heroButton={'Explore Products'} />
      <ProductSection />
    </div>
  )
}

export default App