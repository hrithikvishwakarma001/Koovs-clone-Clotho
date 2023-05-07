import { Routes, Route } from "react-router-dom"
import Home from '../0571/pages/Home'
import Wishlist from '../0571/pages/Wishlist'
import ProductDetails from '../0571/pages/ProductDetails'
import Login from '../0696/pages/Login'
import Signup from "../0696/pages/Signup"
import NextUIAdminPage from "../0568";
import ProductPage from "../0035/pages/Product"
import Cart from "../0696/pages/Cart"
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin/dashboard" element={<NextUIAdminPage />} />
      <Route path="/product"  element={<ProductPage/>} />
      <Route path="/cart"  element={<Cart/>} />
    </Routes>
  )
}

export default AllRoutes