
import { useEffect } from "react"
import {useSelector,useDispatch} from "react-redux"
import { getProduct } from "../Redux/ProductReducer/action"
import { Productcard } from "./ProductCard"
import styled from "styled-components"
import { useLocation, useSearchParams } from "react-router-dom"
export const Productlist=()=>{
    const [searchParams]=useSearchParams()
    const dispatch =useDispatch()
    const location=useLocation()
    const {products}=useSelector((store)=>store.ProductReducer)
    console.log(products)
   
    let obj={
        params:{
        gender:searchParams.getAll("category"),
        _sort:searchParams.get("order") && "price",
        _order:searchParams.get("order")
        }
    }
    useEffect(()=>{
dispatch(getProduct(obj))
    },[location.search])

return (
    <DIV>
        {
            products.length>0&&products.map((el)=>{
                return <Productcard key={el.id} {...el}  />
            })
        }
   </DIV>
)
}

const DIV=styled.div `
display:grid;
grid-template-columns: auto auto auto auto;
gap:20px



`