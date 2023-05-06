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


import { AiOutlineStar } from "react-icons/ai"
import { FiEye } from "react-icons/fi"
import Footer from "../component/Footer"

export default function ProductCard(props) {


    return (
        <>
        <Container maxW={"7xl"}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                    <Image
                        rounded={"md"}
                        alt={"product image"}
                        src={"https://www.koovs.com/cdn/shop/products/KOOVS_20OCT22-0747-8.jpg?v=1668075236&width=600"}
                        fit={"cover"}
                        align={"center"}
                        w={"100%"}
                        h={{ base: "100%", sm: "400px", lg: "100%" }}
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
                            Lorem ipsum dolor sit amet
                        </Heading>
                        <Text
                            color={useColorModeValue("gray.900", "gray.400")}
                            fontWeight={600}
                            fontSize={"2xl"}>
                            ₹999.00
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
                            <Text fontSize={"md"}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias obcaecati necessitatibus magni. Error, necessitatibus possimus molestiae ex aut dolore consequuntur labore mollitia voluptate! Perspiciatis dolore ut qui eum itaque fugiat corporis. Ullam, blanditiis mollitia id, suscipit sunt incidunt soluta veniam placeat unde vel accusantium esse a commodi temporibus, animi aliquam!lorem50
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati alias reiciendis odit! Qui atque perspiciatis obcaecati! Ea sequi fugit voluptate in, dicta illo. Dolorem voluptatum aliquam sit veritatis! Recusandae rem nesciunt officiis corporis natus omnis unde possimus, quas minus, enim doloribus ducimus nam numquam obcaecati nisi ad debitis in laboriosam!
                            </Text>
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
                        }}>
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



<Footer/>

        </>
    );
}