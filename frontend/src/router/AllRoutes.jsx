import React from 'react'
import{Routes,Route} from "react-router-dom"
import Home from '../0571/pages/Home'


const AllRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
   
  </Routes>
  )
}

export default AllRoutes
