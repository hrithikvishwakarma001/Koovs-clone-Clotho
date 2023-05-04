import React from 'react'
import {Box,Center,Text} from "@chakra-ui/react"
import { AiOutlineInstagram} from "react-icons/ai";
import { FaFacebookF} from 'react-icons/fa';
import {BiChevronDown,BiSearch,BiShoppingBag} from "react-icons/bi"
import {AiOutlineStar} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import { useNavigate } from "react-router-dom";

import Logo from "../Img/logo.png"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    Button,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
const Navbar = () => {
  let navigate = useNavigate(); 
  return (
    <Box width="100%" height="100px">
<Box  border="1px solid gray" width="100%" height="40%">
    
       
  <Box display="flex" marginTop={"-5px"} paddingBottom="10px" paddingLeft={"50px"} paddingRight={"40px"} >
  <Box display="flex"> 
  <Center><FaFacebookF size={16}/> <Text _hover={{cursor:"pointer"}} marginLeft="5px" marginRight="15px" fontSize={15} >1.8M Followers</Text> <AiOutlineInstagram   size={17}/> <Text  fontSize={15} marginLeft="5px" _hover={{cursor:"pointer"}}>628k Followers</Text></Center>
   </Box>
        <Box marginLeft={"16%"}> <Text _hover={{cursor:"pointer"}} fontSize={15}>Open doors to a world of fashion | Young and fresh</Text></Box>
        <Box marginLeft={"30%"}> 
           
   <Center>
   <Text fontSize={15} _hover={{cursor:"pointer"}}>English</Text><BiChevronDown/>
    </Center>        
  
 
  </Box>

  </Box>
    
      
       
        
      
       
         </Box>
      
    <Box display="flex" justifyContent="space-evenly"  width="100%" height="60%">
<Box border="1px solid orange" height="100%" width="35%">1</Box>
<Box onClick={()=>navigate("/")} _hover={{cursor:"pointer"}} height="100%" width="25%"><img style={{width:"65%",marginTop:"-70px"}} src={Logo} alt="" /></Box>
<Box display="flex"  height="100%" width="35%">
  
 <Center gap="15px" marginLeft={"260px"}>
 
 
  <Box _hover={{cursor:"pointer"}}><BiSearch  size={25}/></Box>
  <Box _hover={{cursor:"pointer"}}> <BsFillPersonFill size={25}/> </Box>
   <Box onClick={()=>navigate("/wishlist")} display="flex" alignItems={"center"} _hover={{cursor:"pointer"}}> <AiOutlineStar size={25}/><Text background="#F16648" borderRadius={"50%"} marginTop={"-1px"} marginLeft={"-6px"} width="20px" height="20px" fontSize={14}  color="white" fontWeight={600}>1</Text></Box>
   <Box onClick={()=>navigate("/wishlist")} _hover={{cursor:"pointer"}} display="flex" alignItems={"center"}> <BiShoppingBag size={25} /><Text background="#F16648" borderRadius={"50%"} marginTop={"-1px"} marginLeft={"-6px"} width="20px" height="20px" fontSize={14}  color="white" fontWeight={600}>1</Text></Box> 
  </Center> </Box>
    </Box>
   
    
    
    </Box>
        
          



  )
}

export default Navbar
