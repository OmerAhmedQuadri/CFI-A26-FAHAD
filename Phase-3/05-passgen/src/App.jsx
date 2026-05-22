import { useState, useEffect } from 'react'
import Input from './components/Input'
import Slider from './components/Slider'
import Actions from './components/Actions'
import { useCallback } from 'react'

const App = () => {

  const [passwordLength, setPasswordLength] = useState(8)

  const [password, setPassword] = useState('')

  const [uppercaseAllowed, setUppercaseAllowed] = useState(false)
  const [lowercaseAllowed, setLowercaseAllowed] = useState(true)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [symbolsAllowed, setSymbolsAllowed] = useState(false)

  const [copied, setcopied] = useState(false)

  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    setcopied(true)
    setTimeout(() => {
      setcopied(false)
    }, 2000)
  }

  const generatePassword = useCallback(() => {
    let str = ''
    if (lowercaseAllowed) str += 'abcdefghijklmnopqrstuvwxyz'
    if (uppercaseAllowed) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numbersAllowed) str += "01234567890123456789"
    if (symbolsAllowed) str += "!@#$%^&*()_+-=[]{}/?<>.\\|:;`~\"'"

    let pass = ''
    for (let i = 0; i < passwordLength; i++) {
      let index = Math.floor(Math.random() * str.length)
      pass += str[index]
    }
    setPassword(pass)

  }, [lowercaseAllowed,
    uppercaseAllowed,
    numbersAllowed,
    symbolsAllowed,
    passwordLength])

  useEffect(() => {
    generatePassword()
  }, [uppercaseAllowed, lowercaseAllowed, numbersAllowed, symbolsAllowed, generatePassword])


  return (
    <div className='p-5 bg-mauve-800 h-screen'>
      <div className='flex flex-col justify-center items-center h-150 rounded-lg bg-mauve-700 gap-5'>

        <Input
          password={password}
          setPassword={setPassword}
          generatePassword={generatePassword}
          copied={copied}
          copyPassword={copyPassword}
        />

        <Slider
          passwordLength={passwordLength}
          setpasswordlength={setPasswordLength}
        />

        <Actions
          uppercaseAllowed={uppercaseAllowed}
          setUppercaseAllowed={setUppercaseAllowed}

          lowercaseAllowed={lowercaseAllowed}
          setLowercaseAllowed={setLowercaseAllowed}

          numbersAllowed={numbersAllowed}
          setNumbersAllowed={setNumbersAllowed}

          symbolsAllowed={symbolsAllowed}
          setSymbolsAllowed={setSymbolsAllowed}
        />

      </div>
    </div>
  )
}

export default App