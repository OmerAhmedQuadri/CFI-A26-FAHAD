import React from 'react'
import ProductCard from './ProductCard'

const ProductSection = () => {

    const products = [
        {
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            title: "Air Runner X",
            brand: "Nike",
            price: 129.99
        },
        {
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
            title: "Classic Oversized Tee",
            brand: "H&M",
            price: 24.99
        },
        {
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
            title: "Galaxy Pro Max",
            brand: "Samsung",
            price: 999.99
        }
    ];

    return (

        <div className='text-white flex flex-wrap justify-center items-center bg-slate-500 ml-2.5 mb-2.5 rounded-lg w-310 h-110 gap-5'>
            {
                products.map((ele) => {
                  return  (<ProductCard image={ele.image} title={ele.title} brand={ele.brand} price={ele.price}/>)
                })
            }
        </div>
    )
}

export default ProductSection