import React from 'react'
import{Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Wishlist from '../Pages/Wishlist'
import ProductDetails from '../Pages/ProductDetails'

const AllRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/wishlist" element={<Wishlist/>}/>
    <Route path="/products/:id" element={<ProductDetails/>}/>
  </Routes>
  )
}

export default AllRoutes
