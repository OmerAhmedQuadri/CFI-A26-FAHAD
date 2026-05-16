import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import Footer from './components/Footer'

const App = () => {



  return (
    <div className='bg-black min-h-screen pt-2.5 pb-1'>
      <Navbar logoText={'CYTRO'} />
      <Hero heroText={'Welcome to Product Page'} desc={'This project is to show product cards'} heroButton={'Explore Products'} />
      <ProductSection />
      <Footer/>
    </div>
  )
}

export default App