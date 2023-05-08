import {
    Box,
    useToast,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
} from "@chakra-ui/react";
import toast, { Toaster } from 'react-hot-toast';

import { AiOutlineStar } from "react-icons/ai"
import { FiEye } from "react-icons/fi"
import Footer from "../component/Footer"
import axios from "axios";
import { addProduct } from "../../0568/api/products.api";
import { useSelector } from "react-redux";

export default function ProductCard({data}) {
    const URL = "https://clothoapi.onrender.com/api";
    //  const image=props.image[0]
    // const title=props.title
    // const price=props.price
    //const [firstValue] = image;

    const { token } = useSelector(state => state.authReducer)


    const addProduct = async () => {
     
        

        try {
            const response = await axios.post(`${URL}/cart/create`,data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            toast.success("Product added to cart")
            return response
        } catch (error) {
            toast.error("please login first")
            return error.message
        }
    }
    return (
        <>
            <Toaster />
            <Container maxW={"7xl"}>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 18, md: 24 }}>
                    <Flex>
                        <Image
                            rounded={"md"}
                            alt={"product image"}
                            src={data.image && data.image[0].src}
                            // src={'https://www.koovs.com/cdn/shop/files/KOOVS_20OCT22-2806.jpg?v=1682682944&width=360'}
                            fit={"cover"}
                            align={"center"}
                            w={"100%"}
                            h={{ base: "100%", sm: "400px", lg: "85%" }}
                        />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 1 }} gap="10px">
                        <Box as={"header"}>
                            <Heading
                                color={"gray.700"}
                                lineHeight={1.1}
                                fontWeight={600}
                                mb={1}
                                fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}>
                                {data.title}
                            </Heading>
                            <Text
                                color={useColorModeValue("gray.900", "gray.400")}
                                fontWeight={600}
                                fontSize={"2xl"}>
                                {data.price}
                            </Text>
                            <Box display="flex" gap="2px" mt="30px">
                                <AiOutlineStar color="teal" />
                                <AiOutlineStar color="teal" />
                                <AiOutlineStar color="teal" />
                                <AiOutlineStar color="teal" />
                                <AiOutlineStar color="teal" />
                                <Text ml="10px" mt="-5px">0 Reviews</Text>
                            </Box>

                            <Text display="flex" gap="10px" mt="40px">
                                <FiEye /> <Text mt="-5px" fontWeight={500}>24 people are viewing this right now</Text>
                            </Text>
                        </Box>

                        <Stack
                            pb={{ base: 5, sm: 20 }}
                            spacing={{ base: 4, sm: 4 }}
                            direction={"column"}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue("gray.200", "gray.600")}
                                />
                            }>
                            <VStack spacing={{ base: 4, sm: 6 }}>
                                <Text
                                    color={useColorModeValue("gray.500", "gray.400")}
                                    fontSize={"2xl"}
                                    fontWeight={"300"}>
                                    Fresh and Delecious Non-Veg is always available on Redmeat
                                    Lajawab Freshness
                                </Text>
                                <Box w="100%" >
                                    <Text fontWeight={500} >Size :</Text>
                                    <Box mt="5px" display="flex" gap="10px"><Button bg="none" border="1px solid gray" _hover={{ bg: "black", color: "white" }}>S</Button>
                                        <Button bg="none" border="1px solid gray" _hover={{ bg: "black", color: "white" }}>M</Button>
                                        <Button bg="none" border="1px solid gray" _hover={{ bg: "black", color: "white" }}>L</Button>
                                        <Button bg="none" border="1px solid gray" _hover={{ bg: "black", color: "white" }}>XL</Button>





                                    </Box>


                                </Box>
                                <Box w="100%" >
                                    <Text fontWeight={500} >Color :</Text>
                                    <Box mt="5px" display="flex" gap="10px"><Button borderRadius={"60%"} w="5%" bg="pink" border="1px solid gray" _hover={{ transform: "scale(1.2)", transition: "all .3s", color: "white" }}></Button>
                                        <Button borderRadius={"60%"} w="5%" bg="white" border="1px solid gray" _hover={{ transform: "scale(1.2)", transition: "all .3s", color: "white" }}></Button>






                                    </Box>


                                </Box>
                            </VStack>
                        </Stack>

                        <Button

                            rounded={"none"}
                            w={"full"}
                            size={"lg"}
                            py={"7"}
                            bg={"#d11342"}
                            color={"#fff"}
                            textTransform={"uppercase"}
                            _hover={{
                                transform: "translateY(2px)",
                                boxShadow: "lg",
                            }}
                            onClick={addProduct}
                        >
                            Add to cart
                        </Button>

                        <Button

                            rounded={"none"}
                            w={"full"}
                            size={"lg"}
                            py={"7"}

                            bg={"black"}
                            color={"#fff"}
                            textTransform={"uppercase"}
                            _hover={{
                                transform: "translateY(2px)",
                                boxShadow: "lg",
                            }}>
                            BUY IT NOW
                        </Button>




                    </Stack>
                </SimpleGrid>
            </Container>



            <Footer />

        </>
    );
}