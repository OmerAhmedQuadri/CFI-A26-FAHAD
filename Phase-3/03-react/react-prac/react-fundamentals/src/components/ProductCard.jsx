import React from 'react'

const ProductCard = ({ image, title, brand, price }) => {
  return (
    <div className='flex flex-col justify-start mt-6 mb-6 mx-2 w-65 h-90 rounded-2xl bg-slate-700 hover:scale-102 transition duration-300 border border-slate-200'>
      <div className='flex items-center justify-center  ml-2.5 w-60 h-45 rounded-lg mt-3 bg-amber-50'>
        <img src={image} alt="" className='w-58 h-42 object-cover rounded-lg' />
      </div>
      <div >
        <h1 className='mt-5 ml-4 font-bold text-lg'>{title}</h1>
        <p className=' ml-4  text-slate-400'>{brand}</p>
      </div>
      <div className=' flex justify-between'>
        <h2 className='mt-12 ml-4 font-bold text-2xl'>{price}</h2>
        <button className='mt-12 font-bold text-sm mr-4 bg-slate-800 p-2 rounded-lg hover:scale-105 transition duration-300'>BUY NOW</button>
      </div>
      
    </div>
  )
}

export default ProductCard