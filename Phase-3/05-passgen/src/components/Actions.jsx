import React from 'react'

const Actions = ({
    lowercaseAllowed,
    setLowercaseAllowed,

    uppercaseAllowed,
    setUppercaseAllowed,

    numbersAllowed,
    setNumbersAllowed,

    symbolsAllowed,
    setSymbolsAllowed
}) => {

    let checklist =
        uppercaseAllowed +
        lowercaseAllowed +
        numbersAllowed +
        symbolsAllowed

    return (
        <div className='flex text-white font-bold justify-center items-center'>

            <input
                type="checkbox"
                className='h-5 w-5 mr-2'
                id="uppercase"
                checked={uppercaseAllowed}

                onChange={() => {

                    if (checklist == 1 && uppercaseAllowed) {
                        return
                    }

                    setUppercaseAllowed(prev => !prev)
                }}
            />

            <label htmlFor="uppercase" className='mr-5'>
                Uppercase
            </label>

            <input
                type="checkbox"
                className='h-5 w-5 mr-2'
                id="lowercase"
                checked={lowercaseAllowed}

                onChange={() => {

                    if (checklist == 1 && lowercaseAllowed) {
                        return
                    }

                    setLowercaseAllowed(prev => !prev)
                }}
            />

            <label htmlFor="lowercase" className='mr-5'>
                Lowercase
            </label>

            <input
                type="checkbox"
                className='h-5 w-5 mr-2'
                id="numbers"
                checked={numbersAllowed}

                onChange={() => {

                    if (checklist == 1 && numbersAllowed) {
                        return
                    }

                    setNumbersAllowed(prev => !prev)
                }}
            />

            <label htmlFor="numbers" className='mr-5'>
                Numbers
            </label>

            <input
                type="checkbox"
                className='h-5 w-5 mr-2'
                id="symbols"
                checked={symbolsAllowed}

                onChange={() => {

                    if (checklist == 1 && symbolsAllowed) {
                        return
                    }

                    setSymbolsAllowed(prev => !prev)
                }}
            />

            <label htmlFor="symbols" className='mr-5'>
                Symbols
            </label>

        </div>
    )
}

export default Actions