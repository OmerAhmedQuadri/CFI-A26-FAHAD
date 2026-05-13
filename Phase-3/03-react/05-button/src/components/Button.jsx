// import React from 'react'

// const Button = ({clickHandler, type , text , size , disabled}) => {
//   return (
//     <>
//         <button
//             onClick={clickHandler}
//             className={`rounded
//                 ${size === 'sm' ? 'py-1 px-2 text-sm' : 'py-1 px-4 text-lg' }
//                 ${type === 'primary' ? 'bg-blue-500 hover:bg-blue-300 text-white' : 'bg-rose-500 hover:bg-rose-300 text-white '}
//                 ${disabled && 'opacity-50 cursor-not-allowed'}
//             `}
//             disabled= {disabled}
//         >
//             {text}
//         </button>
//     </>
//   )
// }

// export default Button

import React from 'react'

const Button = ({ clickHandler, type, text, size, disabled }) => {
    return (
        <button
            onClick={disabled ? null : clickHandler}
            className={`rounded 
                 ${size === 'sm' ? 'py-1 px-2 text-sm' : 'py-1 px-4 text-lg'}
                 ${type === 'primary' ? 'bg-blue-500 hover:bg-blue-300 text-white' : type === 'secondary' ? 'bg-violet-500 hover:bg-violet-300 text-white' : type === 'danger' ? 'bg-red-600 hover:bg-red-300 text-white' : type === 'warning' ? 'bg-yellow-300 hover:bg-yellow-100 text-white' : type == 'success' && 'bg-green-400 hover:bg-green-200'}
                 ${disabled ? 'opacity-50 cursor-not-allowed': 'cursor-pointer'}
             `}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button