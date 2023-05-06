import React from 'react'
import { Box, Text, Image, Button, background, Center, Heading, SimpleGrid } from "@chakra-ui/react"
import { FiArrowRight } from "react-icons/fi"
import { AiOutlineStar } from "react-icons/ai"
import Footer from "../component/Footer"
const Wishlist = () => {
    const arrival = [
        { img: "https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-03.jpg?v=1682677883&width=360", title: "Oscars T-Shirt", price: "₹790.00", cat: "KOOV" },
        { img: "https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-03.jpg?v=1682677883&width=360", title: "Oscars T-Shirt", price: "₹790.00", cat: "KOOV" },
        { img: "https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-03.jpg?v=1682677883&width=360", title: "Oscars T-Shirt", price: "₹790.00", cat: "KOOV" },




    ]
    return (
        <div>
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

                    {arrival.map((e) => <Box _hover={{ transform: "scale(0.95)", transition: "all .5s", cursor: "pointer" }}>
                        <img style={{ height: "400px" }} src={e.img} alt="" />
                        <Button marginLeft={"240px"} marginTop={"-240%"} _hover={{ bg: "black", color: "white", transform: "scale(1.2)", transition: "all .3s" }} borderRadius={"50%"} height="45px" padding={"14px"} border="none"><AiOutlineStar size={17} /></Button>
                        <Text color="#888181" textAlign={"left"} fontWeight={500} fontSize={10}>{e.cat} </Text>
                        <Text textAlign={"left"} marginTop={"-1px"} fontWeight={600} fontSize={14}>{e.title}</Text>
                        <Text textAlign={"left"} marginTop={"-1px"} fontWeight={400} fontSize={13}>hii{e.price}</Text>
                    </Box>)}


                </SimpleGrid>
            </Box>

            <Footer />
        </div>
    )
}

export default Wishlist
