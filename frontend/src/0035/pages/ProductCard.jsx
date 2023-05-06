
import styled from "styled-components"
export const Productcard=({image,title,brand,price,discount,gender,id})=>{
return <DIV>
    <img src={image[0].src}></img>
    <h3>{title}</h3>
    <h3>{brand}</h3>
    <p>{price}</p>
    <p>{discount}</p>
    <p>{gender}</p>
   
    </DIV>
}

const DIV=styled.div`
border:1px solid grey;
padding:10px;
width:270px;

img {
    width:100%
}




`