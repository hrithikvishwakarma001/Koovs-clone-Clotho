import React from 'react'
import{Routes,Route} from "react-router-dom"
import ProductPage from '../pages/Product'

const AllRoutes = () => {
  return (
  <Routes>
   <Route path="/product"  element={<ProductPage />} />
    
  </Routes>
  )
}

export default AllRoutes
