import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import * as dotenv from "dotenv"
dotenv.config()
function App() {
  const [count, setCount] = useState(0)
console.log(process.env.mongo)
  return (
    <>
   
      
    </>
  )
}

export default App
