import React from 'react'

const ProductCard = ({ image, title, brand, price }) => {
  return (
    <div className='flex flex-col justify-start w-70 h-90 rounded-2xl bg-slate-700'>
      <div className='flex items-center justify-center  ml-2.5 w-65 h-45 rounded-lg mt-3 bg-amber-50'>
        <img src={image} alt="" className='w-62 h-42 object-cover rounded-lg' />
      </div>
      <div >
        <h1 className='mt-5 ml-4 font-bold text-lg'>{title}</h1>
        <p className=' ml-4  text-slate-400'>{brand}</p>
      </div>
      <div className='mt-12 ml-4 font-bold text-2xl '>
        <h2>{price}</h2>
      </div>
    </div>
  )
}

export default ProductCard