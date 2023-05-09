import React, { useEffect, useState } from 'react'
import { Box, Text, Image, Button, background, Center, Heading, SimpleGrid } from "@chakra-ui/react"
import { Tooltip } from '@chakra-ui/react'

import { FiArrowRight } from "react-icons/fi"
import { AiOutlineStar } from "react-icons/ai"
import Footer from "../component/Footer"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
const Wishlist = () => {
    const [update,setupdate]=useState(false)
    const [data,setdata]=useState([])
    const arrival = [
        { img: "https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-03.jpg?v=1682677883&width=360", title: "Oscars T-Shirt", price: "₹790.00", cat: "KOOV" },
        { img: "https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-03.jpg?v=1682677883&width=360", title: "Oscars T-Shirt", price: "₹790.00", cat: "KOOV" },
        { img: "https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-03.jpg?v=1682677883&width=360", title: "Oscars T-Shirt", price: "₹790.00", cat: "KOOV" },




    ]
    
      
    const getProducts = async () => {
       
        try {
          const response = await axios.get("https://636a17f3c07d8f936d92dd55.mockapi.io/fas")
          setdata(response.data)
        } catch (error) {
          console.log(error)
        }
      }
    
       
      useEffect(()=>{
        getProducts()
      },[update])
     
    
    
    return (
        <div>
              <Toaster/>
            <Box marginLeft={"-40px"} marginBottom={"0px"} height="90px" marginTop={"50px"} > <Text textAlign={"center"} fontWeight={400} fontSize={33}>Wishlist
            </Text></Box>
            <Box w="12%" margin={"auto"} display="flex" marginTop={"0px"} marginBottom={"50px"} gap="20px">
                <Text display="flex" gap="10px" fontWeight={500} fontSize={14} onClick={() => setdata(true)} color="gray" _hover={{ color: "black", cursor: "pointer" }}>Home <Center><FiArrowRight size={17} /></Center>
                </Text>
                <Text fontWeight={500} fontSize={14} onClick={() => setdata(false)} color="gray" _hover={{ color: "black", cursor: "pointer" }}>Wishlist
                </Text>

            </Box>
            <Box w="100%" height="auto" padding="40px" marginBottom={"40px"} paddingTop={"0px"} gap="20px"


            >
                <SimpleGrid margin="auto" columns={{ sm: 1, md: 2, lg: 4 }} >

                    {data.map((e) => <Box _hover={{ transform: "scale(0.95)", transition: "all .5s", cursor: "pointer" }}>
                        <img style={{ height: "400px" }} src={e.image} alt="" />
                        <Tooltip  label='Removed to wishlist' placement='top-start' bg='gray.300' color='black'>

                        <Button onClick={async()=> {
await axios.delete(`https://636a17f3c07d8f936d92dd55.mockapi.io/fas/${e.id}`)
setupdate(!update)
toast.success("Product Removed")
                        } }  marginLeft={"200px"} marginTop={"-240%"} _hover={{ bg: "black", color: "white", transform: "scale(1.2)", transition: "all .3s" }} borderRadius={"50%"} height="45px" padding={"14px"} border="none"><AiOutlineStar size={17} /></Button>
                        </Tooltip>
                        <Text color="#888181" textAlign={"left"} fontWeight={500} fontSize={10}>{e.category} </Text>
                        <Text textAlign={"left"} marginTop={"-1px"} fontWeight={600} fontSize={14}>{e.title}</Text>
                        <Text textAlign={"left"} marginTop={"-1px"} fontWeight={400} fontSize={13}>{e.price}</Text>
                    </Box>)}


                </SimpleGrid>
            </Box>

            <Footer />
        </div>
    )
}

export default  Wishlist;
