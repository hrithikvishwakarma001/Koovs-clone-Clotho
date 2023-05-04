import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import AllRoutes from './router/AllRoutes'
import Navbar from './0571/component/Navbar'

function App() {
 
  return (
    <>
   <div>
    <Navbar/>
    <AllRoutes/>
   </div>
      
    </>
  )
}

export default App
