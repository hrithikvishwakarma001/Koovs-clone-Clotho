import React from 'react'
import{Routes,Route} from "react-router-dom"
import Home from '../0571/pages/Home'
import Wishlist from '../0571/pages/Wishlist'
import ProductDetails from '../0571/pages/ProductDetails'

const AllRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
   <Route path="/wishlist" element={<Wishlist/>}/>
    <Route path="/details/:id" element={<ProductDetails/>}/>
    
    

  </Routes>
  )
}

export default AllRoutes