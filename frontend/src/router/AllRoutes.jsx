import { Routes, Route } from "react-router-dom"
import Home from '../0571/pages/Home'
import Wishlist from '../0571/pages/Wishlist'
import ProductDetails from '../0571/pages/ProductDetails'
import Login from '../0696/pages/Login'
import Signup from "../0696/pages/Signup"
import NextUIAdminPage from "../0568";
import { Productlist } from "../0035/pages/ProductList"
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
      <Route path="/cart"  element={<Cart/>} />
      <Route path="/product"  element={<Productlist />} />
    </Routes>
  )
}

export default AllRoutes