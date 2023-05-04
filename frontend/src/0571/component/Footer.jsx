import {
    Box,
    Container,
    HStack,
    Link,
    SimpleGrid,
    Stack,
    Image,
    Text,
    Button,
    Divider,
    Input,
    Center,
  
    Flex,
  } from "@chakra-ui/react";
  import { FiArrowRight,FiArrowUp } from "react-icons/fi"
  import { AiOutlineInstagram} from "react-icons/ai";
import { FaFacebookF} from 'react-icons/fa';
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={"500"} fontSize={"md"} mb={2} color={"#000"}>
        {children}
      </Text>
    );
  };
  
  const LinkChild = ({ children }) => {
    return (
      <Link fontSize={"12px"} lineHeight={1.2}>
        {children}
      </Link>
    );
  };
  
  export default function Footer() {
    return (
      <Box padding="0px" paddingLeft="0px" bg={"#E5E4E2"} color={"#6C7278"} marginBottom={"1px solid Pewter"}>
        <Container as={Stack} maxW={"6xl"} py={10} padding="30px">
          <SimpleGrid display="grid" gridTemplateColumns={"repeat(4,1fr)"} spacing={5}>
            <Stack align={"flex-start"}>
              <ListHeader  >About</ListHeader>
              <Text  fontWeight={500} fontSize={14}>Our Story </Text>
              <Text fontWeight={500} fontSize={14}>Contact Us</Text>
              <Text fontWeight={500} fontSize={14} >Carees</Text>
              <Text fontWeight={500} fontSize={14}>Privacy Policy</Text>
            
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Text fontWeight={500} fontSize={14}>Payments </Text>
              <Text fontWeight={500} fontSize={14}>Returns/Exchange</Text>
              <Text fontWeight={500} fontSize={14}>Shipment</Text>
              <Text fontWeight={500} fontSize={14}>Terms & conditions</Text>
            
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Customer Care</ListHeader>
              <Text fontWeight={500} fontSize={14}>Timings: 10 AM - 6 PM (Mon - Sat)</Text>
              <Text fontWeight={500} fontSize={14}>Call: +91 7011263423</Text>
              <Text fontWeight={500} fontSize={14}>E-Mail: care@koovs.com</Text>
           
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Subscribe</ListHeader>
             
              <Text fontWeight={500} fontSize={14}>Enter your email below</Text>
              <Text fontWeight={500} fontSize={14}>about new collections and product launches.</Text>
          
            <Box display="flex">
            <Input placeholder="Enter Your Email" padding={"10px 40px"} border="none" fontSize={14} fontWeight={500}/>
           <Button _hover={{ bg: "black", color: "white", transition: "all .3s" }} marginLeft={"-40px"}  height="45px" padding={"14px"} border="none" bg="none"> <FiArrowRight size={17} /></Button>
            </Box>
            <Box  >
            <Button   _hover={{ bg: "black", color: "white", transform: "scale(1.2)", transition: "all .3s" }} marginTop={"20px"} marginLeft={"210px"}  borderRadius={"50%"} height="45px" padding={"14px"} border="none"> <FiArrowUp size={17} /></Button>
            </Box>
           
            </Stack>
           
          </SimpleGrid>
          <Divider py={5} />
        </Container>
        <Container>

         
        </Container>

        
        <Box w="100%"  padding="25px" borderTop={"1px solid gray"} height="100px" display="flex" justifyContent={"space-between"} gap="20px" >
       
       
       <Box    textAlign={"left"} display="flex" gap="10px" justifyContent={"space-evenly"}>

     <FaFacebookF size={22}/>  <AiOutlineInstagram  size={25}/>
       </Box>

       <Box  marginLeft={"18%"}><Text >© NEWBRAVE VENTURE PRIVATE LIMITED</Text>
       </Box>
       <Box   >
      
       <img style={{width:"90%"}} src="https://www.koovs.com/cdn/shop/files/payment-removebg-preview-01.png?v=1668333198&width=360" alt="" />
       </Box>
   
      </Box>
       
      

      </Box>
    );
  }
  