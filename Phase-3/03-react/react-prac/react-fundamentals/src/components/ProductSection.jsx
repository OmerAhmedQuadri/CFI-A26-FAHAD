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
        },
        {
            image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
            title: "Street Flex Sneakers",
            brand: "Adidas",
            price: 89.99
        },
        {
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            title: "Chrono Smart Watch",
            brand: "Apple",
            price: 349.99
        },
        {
            image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
            title: "Urban Leather Jacket",
            brand: "Zara",
            price: 149.99
        },
        {
            image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            title: "Slim Fit Denim Jeans",
            brand: "Levi's",
            price: 59.99
        },
        {
            image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
            title: "FitPulse Smart Band",
            brand: "Xiaomi",
            price: 49.99
        }

    ];

    return (

        <div className='text-white flex flex-wrap justify-center items-center bg-slate-500 ml-2.5 mb-2.5 rounded-lg w-310 min-h-110 gap-5 border border-slate-200'>
            {
                products.map((ele) => {
                    return (<ProductCard image={ele.image} title={ele.title} brand={ele.brand} price={ele.price} />)
                })
            }
        </div>
    )
}

export default ProductSection