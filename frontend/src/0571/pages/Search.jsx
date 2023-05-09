
import { useDisclosure, Button, Text, Input, Image, Box, Stack, SimpleGrid, Center } from "@chakra-ui/react"
import React from 'react'
import { useState } from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import Logo from "../Img/logo2.png"
import { BASEURL } from "../../0568/utils/index";
import axios from "axios"

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { BiChevronDown, BiSearch, BiShoppingBag } from "react-icons/bi"
import { useMediaQuery } from '@chakra-ui/react'
import { AiOutlineStar } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { searchByQuery } from "../../0568/api/users.api";

const Search = () => {
    const URL = `${BASEURL}/products/all`;
    //  console.log("UU",URL)
    const [query, setQuery] = React.useState("");
    const [response, setResponse] = React.useState("");





    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'

        />
    )
    const navigate = useNavigate()



    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)


    const setInput = (setter) => (e) => {
        setter(e.target.value);
    };

    const searchByQuery = async (query) => {
        try {
            const response = await axios.get(`${URL}?q=${query}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    const handleClick = async (e) => {
        e.preventDefault()

        if (query === "") {
            setResponse("Please enter a valid URL or length");
            return;
        }


        try {

            const res = await searchByQuery(query);

            setResponse(res);


        } catch (error) {
            setResponse("Something went wrong! Please try again later.");
        }




    }


    return (
        <>
            <Button
                bg="none"
                _hover={{ bg: "none" }}
                onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}
            >
                <BiSearch size={25} />
            </Button>

            <Modal size={30} isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent mt={"-0.5%"}>

                    <ModalCloseButton />
                    <ModalBody paddingTop={50}>

                        <SimpleGrid w="100%" columns={{ sm: 1, md: 2, lg: 3 }} >

                            <Box >
                                <Center> <Image marginLeft={1} w="35%" src={Logo} /></Center>
                            </Box>
                            <Box margin="auto" width={{ sm: "30%", md: "20%", lg: "50%" }}>  <form onSubmit={handleClick}>

                                <Input
                                    onChange={setInput(setQuery)}
                                    value={query}

                                    marginLeft={-40} w="270%" placeholder='Search here' />

                            </form></Box>


                            <Box marginRight={10} mt={2}>
                                <Stack

                                    flex={{ base: 1, md: 0 }}
                                    justify={'flex-end'}
                                    direction={'row'}
                                    marginRight={39.5}
                                    spacing={4}>

                                    <BiSearch size={25} />
                                    <Box onClick={() => navigate("/login")}><BsFillPersonFill size={25} /></Box>
                                    <Box onClick={() => navigate("/wishlist")} display="flex" alignItems={"center"} _hover={{ cursor: "pointer" }}> <AiOutlineStar size={25} /><Text textAlign={"center"} background="#F16648" borderRadius={"50%"} marginTop={"-10px"} marginLeft={"-6px"} width="20px" height="20px" fontSize={14} color="white" fontWeight={600}>1</Text></Box>

                                    <Box onClick={() => navigate("/cart")} _hover={{ cursor: "pointer" }} display="flex" alignItems={"center"}> <BiShoppingBag size={25} /><Text textAlign={"center"} background="#F16648" borderRadius={"52%"} marginTop={"-10px"} marginLeft={"-6px"} width="20px" height="20px" fontSize={14} color="white" fontWeight={600}>1</Text></Box>



                                </Stack>
                            </Box>
                        </SimpleGrid>

                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default Search;