import styled from "styled-components"

export const Productcard=({image,title,price,swatches,articleCode})=>{
    
    
    
const priceNumber = parseFloat(price.replace(/[^\d.-]/g, "").replace(",", "").substring(1));


    
  return (
    <DIV>
      
      
      <img src={image[0].src} />
     
      <h3>{title}</h3>
    
      <p>RS.{priceNumber}</p>

     
    </DIV>
  );
};

const DIV=styled.div`
  
  padding:10px;
  width:270px;

  img {
      width:100%
  }
`;
