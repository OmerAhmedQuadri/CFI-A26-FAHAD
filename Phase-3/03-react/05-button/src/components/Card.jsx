import React from 'react'

const Card = ({ title, image, price, desc }) => {
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1>{title}</h1>
                <p></p>
                <p></p>
                <button></button>
            </div>
        </div>
    )
}

export default Card