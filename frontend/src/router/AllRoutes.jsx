import{Routes,Route} from "react-router-dom"
import Home from '../0571/pages/Home'
import Wishlist from '../0571/pages/Wishlist'
import ProductDetails from '../0571/pages/ProductDetails'
import Login from '../0696/pages/Login'
import Signup from "../0696/pages/Signup"

const AllRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
   <Route path="/wishlist" element={<Wishlist/>}/>
    <Route path="/productdetails" element={<ProductDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>

  </Routes>
  )
}

export default AllRoutes