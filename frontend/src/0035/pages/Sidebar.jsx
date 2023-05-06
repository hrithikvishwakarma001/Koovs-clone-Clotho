import { useEffect, useState } from "react"
import {  useSearchParams } from "react-router-dom"

const Sidebar=()=>{
    const [searchParams,setSearchParams]=useSearchParams()
    const initialCategory=searchParams.getAll("category")
    const initialOrder=searchParams.get("order")
    
    const [category,setCategory]=useState(initialCategory||[])
    const [order,setOrder]=useState(initialOrder||"")
    
    
    const handleChange=(e)=>{
        let newCategory=[...category]
        const value=e.target.value
        if(newCategory.includes(value)){
            newCategory=newCategory.filter((el)=>el!==value)
        }else{
            newCategory.push(value)
        }

setCategory(newCategory)
console.log(category)
    }
    const handleSort=(e)=>{
        setOrder(e.target.value)
        console.log(e.target.value)
    }
    useEffect(()=>{
let params={
    category,
    
}
order&&(params.order=order)
setSearchParams(params)
    },[category, order])
    return <>
    <h1>filter by</h1>

    <div>
        <input type="checkbox" value={"male"}  onChange={handleChange} checked={category.includes("male")} ></input>
        <label>Men</label>

    </div>
    <div>
        <input type="checkbox" value={"female"}  onChange={handleChange} checked={category.includes("female")} ></input>
        <label>women</label>

    </div>
    <div>
        <input type="checkbox" value={"kids"}  onChange={handleChange} checked={category.includes("kids")}></input>
        <label>kids</label>

    </div>
    <div onChange={handleSort}>
        <input type="radio" name="order" value={"asc"} ></input>
        <label>assending</label>
        <input type="radio" name="order" value={"desc"} ></input>
        <label>dessending</label>

      </div>
    
    </>
}
export default Sidebar