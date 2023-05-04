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
  
    Flex,
  } from "@chakra-ui/react";
  import { FiArrowRight,FiArrowUp } from "react-icons/fi"
  
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
      <Box border="1px solid red" padding="20px" paddingLeft="50px" bg={"#E5E4E2"} color={"#6C7278"} marginBottom={"1px solid Pewter"}>
        <Container as={Stack} maxW={"6xl"} py={10}>
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
           <Button _hover={{ bg: "black", color: "white", transition: "all .3s" }} marginLeft={"-40px"}  height="45px" padding={"14px"} border="none"> <FiArrowRight size={17} /></Button>
            </Box>
            <Button   _hover={{ bg: "black", color: "white", transform: "scale(1.2)", transition: "all .3s" }}  borderRadius={"50%"} height="45px" padding={"14px"} border="none"> <FiArrowUp size={17} /></Button>
            </Stack>
           
          </SimpleGrid>
          <Divider py={5} />
        </Container>
        <Container>

         
        </Container>
       <Box w="100%" height="100px" border="1px solid blue">

       </Box>

      </Box>
    );
  }
  