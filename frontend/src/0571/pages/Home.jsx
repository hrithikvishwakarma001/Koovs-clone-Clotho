import React, { useState } from 'react'
import { Box, Text, Header, Image, Button, background, Center, Heading } from "@chakra-ui/react"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FiArrowRight } from "react-icons/fi"
import Footer from '../component/Footer'
const Home = () => {
  const [data, setdata] = useState(true)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
  };
  const womendata = [
    { img: "https://www.koovs.com/cdn/shop/files/Tee-01.jpg?v=1667898427&width=360", title: "", items: "" },
    { img: "https://www.koovs.com/cdn/shop/files/Tee-01.jpg?v=1667898427&width=360", title: "", items: "" },
    { img: "https://www.koovs.com/cdn/shop/files/Tee-01.jpg?v=1667898427&width=360", title: "", items: "" },
    { img: "https://www.koovs.com/cdn/shop/files/Tee-01.jpg?v=1667898427&width=360", title: "", items: "" }
  ]
  const arrival = [
    { img: "https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-03.jpg?v=1682677883&width=360", title: "Oscars T-Shirt", price: "₹790.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-03.jpg?v=1682677883&width=360", title: "Oscars T-Shirt", price: "₹790.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-03.jpg?v=1682677883&width=360", title: "Oscars T-Shirt", price: "₹790.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-03.jpg?v=1682677883&width=360", title: "Oscars T-Shirt", price: "₹790.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-03.jpg?v=1682677883&width=360", title: "Oscars T-Shirt", price: "₹790.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-03.jpg?v=1682677883&width=360", title: "Oscars T-Shirt", price: "₹790.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-03.jpg?v=1682677883&width=360", title: "Oscars T-Shirt", price: "₹790.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/files/templateforprdcdssoducts-03.jpg?v=1682677883&width=360", title: "Oscars T-Shirt", price: "₹790.00", cat: "KOOV" }


  ]
  const arrival2 = [
    { img: "https://www.koovs.com/cdn/shop/products/back_ebb860a3-90c3-45d8-9e06-647d79cf457b.png?v=1682847346&width=360", title: "Orange Soda Gang Hoodie", price: "₹2290.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/products/back_ebb860a3-90c3-45d8-9e06-647d79cf457b.png?v=1682847346&width=360", title: "Orange Soda Gang Hoodie", price: "₹2290.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/products/back_ebb860a3-90c3-45d8-9e06-647d79cf457b.png?v=1682847346&width=360", title: "Orange Soda Gang Hoodie", price: "₹2290.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/products/back_ebb860a3-90c3-45d8-9e06-647d79cf457b.png?v=1682847346&width=360", title: "Orange Soda Gang Hoodie", price: "₹2290.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/products/back_ebb860a3-90c3-45d8-9e06-647d79cf457b.png?v=1682847346&width=360", title: "Orange Soda Gang Hoodie", price: "₹2290.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/products/back_ebb860a3-90c3-45d8-9e06-647d79cf457b.png?v=1682847346&width=360", title: "Orange Soda Gang Hoodie", price: "₹2290.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/products/back_ebb860a3-90c3-45d8-9e06-647d79cf457b.png?v=1682847346&width=360", title: "Orange Soda Gang Hoodie", price: "₹2290.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/products/back_ebb860a3-90c3-45d8-9e06-647d79cf457b.png?v=1682847346&width=360", title: "Orange Soda Gang Hoodie", price: "₹2290.00", cat: "KOOV" }


  ]
  const shoes = [
    { img: "https://www.koovs.com/cdn/shop/products/arkkcorrected-01.jpg?v=1668322666&width=360", title: "Visuklass Leather S-C18", price: "₹9990.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/products/arkkcorrected-01.jpg?v=1668322666&width=360", title: "Visuklass Leather S-C18", price: "₹9990.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/products/arkkcorrected-01.jpg?v=1668322666&width=360", title: "Visuklass Leather S-C18", price: "₹9990.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/products/arkkcorrected-01.jpg?v=1668322666&width=360", title: "Visuklass Leather S-C18", price: "₹9990.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/products/arkkcorrected-01.jpg?v=1668322666&width=360", title: "Visuklass Leather S-C18", price: "₹9990.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/products/arkkcorrected-01.jpg?v=1668322666&width=360", title: "Visuklass Leather S-C18", price: "₹9990.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/products/arkkcorrected-01.jpg?v=1668322666&width=360", title: "Visuklass Leather S-C18", price: "₹9990.00", cat: "KOOV" },
    { img: "https://www.koovs.com/cdn/shop/products/arkkcorrected-01.jpg?v=1668322666&width=360", title: "Visuklass Leather S-C18", price: "₹9990.00", cat: "KOOV" }


  ]

 
  return (
    <>
      {/* Main Body */}
      <Box marginTop={"15px"} >
        <Box border="1px solid blue" height="400px" >
          Crousal Part
        </Box>

        <Box paddingLeft={"50px"} height="auto" > <Text textAlign={"left"} fontWeight={600} fontSize={30}>Shop Women's</Text></Box>
        <Box height="auto" padding="20px" paddingTop={"0px"} display={"flex"} gap="10px" justifyContent={"space-evenly"}>

          {womendata.map((e) => <Box _hover={{ transform: "scale(0.95)", transition: "all .5s" ,cursor:"pointer"}}>
            <img style={{ width: "100%", height: "400px" }} src={e.img} />
            <Box marginTop="-70px" marginLeft="-200px">
              <Text fontWeight={600} fontSize={16}>T-Shirts</Text>
              <Text marginTop="-16px" fontSize={14} fontWeight={500} color={"#9D9696"}>10 items</Text>
              <Button _hover={{ bg: "black", color: "white", transform: "scale(1.2)", transition: "all .3s" }} marginTop="-102px" marginLeft={"425px"} borderRadius={"50%"} height="45px" padding={"14px"} border="none"> <FiArrowRight size={17} /></Button>
            </Box>

          </Box>
          )}

        </Box>
        <Box paddingLeft={"50px"} height="90px" > <Text textAlign={"left"} fontWeight={600} fontSize={30}>Shop Men's</Text></Box>
        <Box height="auto" padding="20px" paddingTop={"0px"} display={"flex"} gap="10px" justifyContent={"space-evenly"}>

          {womendata.map((e) => <Box _hover={{ transform: "scale(0.95)", transition: "all .5s",cursor:"pointer" }} >
            <img style={{ width: "100%", height: "400px" }} src={e.img} />
            <Box marginTop="-70px" marginLeft="-200px">
              <Text fontWeight={600} fontSize={16}>T-Shirts</Text>
              <Text marginTop="-16px" fontSize={14} fontWeight={500} color={"#9D9696"}>10 items</Text>
              <Button _hover={{ bg: "black", color: "white", transform: "scale(1.2)", transition: "all .3s" }} marginTop="-102px" marginLeft={"425px"} borderRadius={"50%"} height="45px" padding={"14px"} border="none"> <FiArrowRight size={17} /></Button>
            </Box>

          </Box>
          )}

        </Box>
      </Box>

      <Box paddingLeft={"50px"} height="90px" > <Text textAlign={"center"} fontWeight={400} fontSize={33}>New arrivals
      </Text></Box>
      <Box height="auto" padding="38px" paddingTop={"0px"} display={"grid"} gap="27px" gridTemplateColumns={"repeat(4,1fr)"}>
        {arrival.map((e) => <Box _hover={{ transform: "scale(0.95)", transition: "all .5s",cursor:"pointer" }}>
          <img style={{ width: "100%", height: "400px" }} src={e.img} alt="" />
          <Text color="#888181" textAlign={"left"} fontWeight={500} fontSize={10}>{e.cat} </Text>
          <Text textAlign={"left"} marginTop={"-10px"} fontWeight={600} fontSize={14}>{e.title}</Text>
          <Text textAlign={"left"} marginTop={"-10px"} fontWeight={400} fontSize={13}>{e.price}</Text>
        </Box>)}
      </Box>
      <Center><Button _hover={{ bg: "black", color: "white", transform: "scale(1.1)", transition: "all .3s",cursor:"pointer"}} bg="black" color="white" borderRadius={"5px"} border="none" p="12px 30px" fontWeight={500}>View all</Button></Center>


      <Center><Box paddingLeft={"50px"} height="90px" > <Text marginLeft={"-30px"} fontWeight={400} fontSize={33}>Trending now
      </Text></Box></Center>
      <Box marginBottom={"100px"} marginTop={"40px"} width="100%" height="auto" display="flex" justifyContent={"space-evenly"} >
        <Box> <img style={{ width: "90%", height: "100%" }} src="https://www.koovs.com/cdn/shop/files/Koovs-16march23_SWIM1289_copy.jpg?v=1680269385&width=720" alt="" /><Text textAlign={"left"} marginLeft={"50px"} fontWeight={500}>Retrograde</Text></Box>
        <Box> <img style={{ width: "90%", height: "100%" }} src="https://www.koovs.com/cdn/shop/files/Screenshot_2023-03-31_at_7.07.06_PM.png?v=1680269839&width=720" alt="" /><Text textAlign={"left"} marginLeft={"50px"} fontWeight={500}>Koovs x Boomranng</Text></Box>

      </Box>



      <Box   paddingLeft={"50px"} height="200px" > <Text  textAlign={"center"} fontWeight={400} fontSize={33}>Artist Edits
      </Text>
        <Center><Box display="flex" gap="20px">
          <Text fontWeight={500} fontSize={14}  onClick={()=>setdata(true)} color="gray" _hover={{color:"black",cursor:"pointer"}}>Koovs x Boomranng</Text>
          <Text fontWeight={500} fontSize={14} onClick={()=>setdata(false)} color="gray" _hover={{color:"black",cursor:"pointer"}}>Koovs x George Thomas</Text>
        </Box>
        </Center>


      </Box>

    
{data?  <Box w="100%" paddingTop="10px">


<Carousel responsive={responsive}>

  {arrival.map((e) =>
    <Box marginTop={"30px"} width="80%" margin="auto" _hover={{ transform: "scale(1.2)", transition: "all .5s",cursor:"pointer" }}  >
      <Box w="100%" h="auto" padding="5px"
      >  <Image w="100%" h="100%" ml="5px" src={e.img} />
      </Box>

      <Box h="100px" padding="10px">
        <Heading textAlign={"left"} marginTop={"-5px"} as='h6' size='xs'>{e.title}</Heading>
        <Text textAlign={"left"} marginTop={"-15px"} color="gray">{e.price}</Text>
      </Box>

    </Box>
  )}





</Carousel>
</Box>:

      <Box w="100%" paddingTop="10px">


        <Carousel responsive={responsive}>

          {arrival2.map((e) =>
            <Box marginTop={"30px"} width="80%" margin="auto" _hover={{ transform: "scale(1.2)", transition: "all .5s",cursor:"pointer" }}  >
              <Box w="100%" h="auto" padding="5px"
              >  <Image w="100%" h="100%" ml="5px" src={e.img} />
              </Box>

              <Box h="100px" padding="10px">
                <Heading textAlign={"left"} marginTop={"-5px"} as='h6' size='xs'>{e.title}</Heading>
                <Text textAlign={"left"} marginTop={"-15px"} color="gray">{e.price}</Text>
              </Box>

            </Box>
          )}





        </Carousel>
      </Box>}

      <Center><Button marginBottom={"50px"} _hover={{ bg: "black", color: "white", transform: "scale(1.1)", transition: "all .3s",cursor:"pointer"}} bg="black" color="white" borderRadius={"5px"} border="none" p="12px 30px" fontWeight={500}>View all</Button></Center>
      <Center><Box paddingLeft={"50px"} height="90px" > <Text  fontWeight={400} fontSize={33}>Sneaker Edit
      </Text></Box></Center>
     
      <Box w="100%" paddingTop="10px">


        <Carousel responsive={responsive}>

          {shoes.map((e) =>
            <Box marginTop={"30px"} width="80%" margin="auto" _hover={{ transform: "scale(1.2)", transition: "all .5s",cursor:"pointer" }}  >
              <Box w="100%" h="auto" padding="5px"
              >  <Image w="100%" h="100%" ml="5px" src={e.img} />
              </Box>

              <Box h="100px" padding="10px">
              <Text textAlign={"left"} fontSize={13} marginTop={"-90px"} color="gray">{e.cat}</Text>
                <Heading textAlign={"left"} fontSize={14} marginTop={"-5px"} as='h6' size='xs'>{e.title}</Heading>
                <Text textAlign={"left"} marginTop={"-25px"} color="gray">{e.price}</Text>
              </Box>

            </Box>
          )}





        </Carousel>
      </Box>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      {/* Footer */}
      <Box pt={10} bg={"#f7f6f7"}>
        <Footer />
      </Box>

    </>


  )
}

export default Home

