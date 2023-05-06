import "../DropDown.css/DropDown.css";
import React from 'react'
import { Box, Center, Text } from "@chakra-ui/react"
import { Flex } from '@chakra-ui/react';
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from 'react-icons/fa';
import { BiChevronDown, BiSearch, BiShoppingBag } from "react-icons/bi"
import { AiOutlineStar } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { useNavigate, Link } from "react-router-dom";

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
            <Center><Box border="1px solid gray" width="100%" height="40%" paddingTop={"15px"}>


                <Box display="flex" marginTop={"-5px"} paddingBottom="10px" paddingLeft={"50px"} paddingRight={"40px"} >
                    <Box display="flex">
                        <Center><FaFacebookF size={16} /> <Text _hover={{ cursor: "pointer" }} marginLeft="5px" marginRight="15px" fontSize={15} >1.8M Followers</Text> <AiOutlineInstagram size={17} /> <Text fontSize={15} marginLeft="5px" _hover={{ cursor: "pointer" }}>628k Followers</Text></Center>
                    </Box>
                    <Box marginLeft={"16%"}> <Text _hover={{ cursor: "pointer" }} fontSize={15}>Open doors to a world of fashion | Young and fresh</Text></Box>
                    <Box marginLeft={"30%"}>

                        <Center>
                            <Text fontSize={15} _hover={{ cursor: "pointer" }}>English</Text><BiChevronDown />
                        </Center>


                    </Box>

                </Box>






            </Box></Center>


            <Box display="flex" justifyContent="space-evenly" width="100%" height="60%">
                <Box height="100%" width="35%" paddingLeft={"30px"}>

                    <Flex bgColor="#fff" >
                        <div class="nav2">
                            <nav class="menu">
                                <ul class="menu-main">

                                    <li class="menu-item-has-children">
                                        <Link to={"/mens"}>Mens</Link>
                                        <div class="sub-menu mega-menu mega-menu-column-4">
                                            <div class="list-item">
                                                <h4 class="title">JACKETS</h4>
                                                <ul>
                                                    <li><a href="/">Down Jackets</a></li>
                                                    <li><a href="/">Fleece Jackets</a></li>
                                                    <li><a href="/">Rain Jackets</a></li>
                                                    <li><a href="/">Snow Jackets</a></li>
                                                    <li><a href="/">Ski Jackets</a></li>
                                                    <li><a href="/">Puffer Jackets</a></li>
                                                    <li><a href="/">WindBreakers</a></li>
                                                    <li><a href="/">Vests</a></li>
                                                </ul>
                                                <h4 class="title">BOTTOMS</h4>
                                                <ul>
                                                    <li><a href="/">Pants</a></li>
                                                    <li><a href="/">Shorts</a></li>
                                                    <li><a href="/">Cycling Shorts</a></li>
                                                    <li><a href="/">Biking Pants</a></li>
                                                </ul>
                                            </div>

                                            <div class="list-item">
                                                <h4 class="title">TOPS</h4>
                                                <ul>
                                                    <li><a href="/">Shirts</a></li>
                                                    <li><a href="/">Graphic Tees</a></li>
                                                    <li><a href="/">Hoodies</a></li>
                                                    <li><a href="/">SweatShirts</a></li>
                                                    <li><a href="/">Sweaters</a></li>
                                                    <li><a href="/">Polos</a></li>
                                                </ul>
                                                <h4 class="title">BASE LAYER</h4>
                                                <ul>
                                                    <li><a href="/">HBrief and Boxers</a></li>
                                                    <li><a href="/">Base Layer Tops</a></li>
                                                    <li><a href="/">SBase Layer Bottoms</a></li>

                                                </ul>
                                            </div>
                                            <div class="list-item">
                                                <h4 class="title">HATS</h4>
                                                <ul>
                                                    <li><a href="/">Baseball Caps</a></li>
                                                    <li><a href="/">Sun Hats</a></li>
                                                    <li><a href="/">Bucket Hats</a></li>
                                                    <li><a href="/">Beanies</a></li>
                                                    <li><a href="/">Gloves and Mittens</a></li>
                                                    <li><a href="/">Neck Gaiters & Balaclavas</a></li>
                                                    <li><a href="/">Sunglasses</a></li>
                                                    <li><a href="/">Watches</a></li>
                                                    <li><a href="/">Face Masks</a></li>
                                                </ul>

                                            </div>
                                            <div class="list-item">
                                                <h4 class="title">SHOES</h4>
                                                <ul>
                                                    <li><a href="/">Casual Shoes</a></li>
                                                    <li><a href="/">Hiking Shoes</a></li>
                                                    <li><a href="/">Running Shoes</a></li>
                                                    <li><a href="/">Gym Shoes</a></li>
                                                    <li><a href="/">Boat Shoes</a></li>
                                                    <li><a href="/">Slippers</a></li>
                                                    <li><a href="/">Casual Sandals</a></li>
                                                </ul>

                                            </div>
                                        </div>
                                    </li>

                                    <li class="menu-item-has-children">
                                        <Link to={"/womens"}>Womens</Link>
                                        <div class="sub-menu mega-menu mega-menu-column-4">
                                            <div class="list-item">
                                                <h4 class="title">JACKETS</h4>
                                                <ul>
                                                    <li><a href="/">Down Jackets</a></li>
                                                    <li><a href="/">Fleece Jackets</a></li>
                                                    <li><a href="/">Rain Jackets</a></li>
                                                    <li><a href="/">Snow Jackets</a></li>
                                                    <li><a href="/">Ski Jackets</a></li>
                                                    <li><a href="/">Puffer Jackets</a></li>
                                                    <li><a href="/">WindBreakers</a></li>
                                                    <li><a href="/">Vests</a></li>
                                                </ul>
                                                <h4 class="title">BOTTOMS</h4>
                                                <ul>
                                                    <li><a href="/">Pants</a></li>
                                                    <li><a href="/">Leggings</a></li>
                                                    <li><a href="/">Capries</a></li>
                                                    <li><a href="/">Skirts</a></li>
                                                </ul>
                                            </div>

                                            <div class="list-item">
                                                <h4 class="title">TOPS</h4>
                                                <ul>
                                                    <li><a href="/">Shirts</a></li>
                                                    <li><a href="/">Graphic Tees</a></li>
                                                    <li><a href="/">Hoodies</a></li>
                                                    <li><a href="/">SweatShirts</a></li>
                                                    <li><a href="/">Sweaters</a></li>
                                                    <li><a href="/">Polos</a></li>
                                                </ul>
                                                <h4 class="title">BASE LAYER</h4>
                                                <ul>
                                                    <li><a href="/">Panties</a></li>
                                                    <li><a href="/">Sports Bra</a></li>
                                                    <li><a href="/">Base Layer Tops</a></li>
                                                    <li><a href="/">Base Layer Bottoms</a></li>

                                                </ul>
                                            </div>
                                            <div class="list-item">
                                                <h4 class="title">HATS</h4>
                                                <ul>
                                                    <li><a href="/">Baseball Caps</a></li>
                                                    <li><a href="/">Sun Hats</a></li>
                                                    <li><a href="/">Bucket Hats</a></li>
                                                    <li><a href="/">Beanies</a></li>
                                                    <li><a href="/">Gloves and Mittens</a></li>
                                                    <li><a href="/">Neck Gaiters & Balaclavas</a></li>
                                                    <li><a href="/">Sunglasses</a></li>
                                                    <li><a href="/">Watches</a></li>
                                                    <li><a href="/">Face Masks</a></li>
                                                </ul>

                                            </div>
                                            <div class="list-item">
                                                <h4 class="title">SHOES</h4>
                                                <ul>
                                                    <li><a href="/">Casual Shoes</a></li>
                                                    <li><a href="/">Hiking Shoes</a></li>
                                                    <li><a href="/">Running Shoes</a></li>
                                                    <li><a href="/">Gym Shoes</a></li>
                                                    <li><a href="/">Boat Shoes</a></li>
                                                    <li><a href="/">Slippers</a></li>
                                                    <li><a href="/">Casual Sandals</a></li>
                                                </ul>

                                            </div>
                                        </div>
                                    </li>



                                    <li class="menu-item-has-children">
                                        <a href="/">Artist Collab</a>
                                        <div class="sub-menu mega-menu mega-menu-column-4">
                                            <div class="list-item">
                                                <h4 class="title">MEN'S SHOES & BOOTS</h4>
                                                <ul>
                                                    <li><a href="/">Center Fire Pistol</a></li>
                                                    <li><a href="/">Center Fire Rifles</a></li>
                                                    <li><a href="/">Rim Fire Rifles</a></li>
                                                    <li><a href="/">Fly Jackets</a></li>
                                                    <li><a href="/">Shot Guns</a></li>
                                                    <li><a href="/">MK 364</a></li>
                                                    <li><a href="/">Rk 92 Led</a></li>
                                                </ul>
                                                <h4 class="title">CUSTOMER FAVOURITES</h4>
                                                <ul>
                                                    <li><a href="/">Handgun Ammo</a></li>
                                                    <li><a href="/">Centerfire Ammo</a></li>
                                                    <li><a href="/">Rimfire Ammo</a></li>
                                                    <li><a href="/">Shotcell Ammo</a></li>
                                                </ul>
                                            </div>

                                            <div class="list-item">
                                                <h4 class="title">WOMEN'S SHOES</h4>
                                                <ul>
                                                    <li><a href="/">Binocular</a></li>
                                                    <li><a href="/">Scopes</a></li>
                                                    <li><a href="/">Range Finders</a></li>
                                                    <li><a href="/">Spotting Scopes</a></li>
                                                </ul>
                                                <h4 class="title">SHOE & BOOT ACCESSORIES</h4>
                                                <ul>
                                                    <li><a href="/">Hard Bait</a></li>
                                                    <li><a href="/">Soft Bait </a></li>
                                                    <li><a href="/">Spinner Baits</a></li>
                                                    <li><a href="/">Buzzbaits</a></li>
                                                    <li><a href="/">Jigs</a></li>
                                                </ul>
                                            </div>
                                            <div class="list-item">
                                                <h4 class="title">WADERS ACCESSORIES</h4>
                                                <ul>
                                                    <li><a href="/">Tools & Pilers</a></li>
                                                    <li><a href="/">Fillet Knives</a></li>
                                                    <li><a href="/">Fillet Tables</a></li>
                                                    <li><a href="/">Rod Holders & Racks</a></li>
                                                    <li><a href="/">Fishing Line</a></li>
                                                    <li><a href="/">Fish Hooks</a></li>
                                                    <li><a href="/">Tackle Boxes</a></li>
                                                    <li><a href="/">Tackle Bags</a></li>
                                                    <li><a href="/">Utility Box</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="/">Collections</a>
                                        <div class="sub-menu mega-menu mega-menu-column-4">
                                            <div class="list-item">
                                                <h4 class="title">MEN'S SHOES & BOOTS</h4>
                                                <ul>
                                                    <li><a href="/">Center Fire Pistol</a></li>
                                                    <li><a href="/">Center Fire Rifles</a></li>
                                                    <li><a href="/">Rim Fire Rifles</a></li>
                                                    <li><a href="/">Fly Jackets</a></li>
                                                    <li><a href="/">Shot Guns</a></li>
                                                    <li><a href="/">MK 364</a></li>
                                                    <li><a href="/">Rk 92 Led</a></li>
                                                </ul>
                                                <h4 class="title">CUSTOMER FAVOURITES</h4>
                                                <ul>
                                                    <li><a href="/">Handgun Ammo</a></li>
                                                    <li><a href="/">Centerfire Ammo</a></li>
                                                    <li><a href="/">Rimfire Ammo</a></li>
                                                    <li><a href="/">Shotcell Ammo</a></li>
                                                </ul>
                                            </div>

                                            <div class="list-item">
                                                <h4 class="title">WOMEN'S SHOES</h4>
                                                <ul>
                                                    <li><a href="/">Binocular</a></li>
                                                    <li><a href="/">Scopes</a></li>
                                                    <li><a href="/">Range Finders</a></li>
                                                    <li><a href="/">Spotting Scopes</a></li>
                                                </ul>
                                                <h4 class="title">SHOE & BOOT ACCESSORIES</h4>
                                                <ul>
                                                    <li><a href="/">Hard Bait</a></li>
                                                    <li><a href="/">Soft Bait </a></li>
                                                    <li><a href="/">Spinner Baits</a></li>
                                                    <li><a href="/">Buzzbaits</a></li>
                                                    <li><a href="/">Jigs</a></li>
                                                </ul>
                                            </div>
                                            <div class="list-item">
                                                <h4 class="title">WADERS ACCESSORIES</h4>
                                                <ul>
                                                    <li><a href="/">Tools & Pilers</a></li>
                                                    <li><a href="/">Fillet Knives</a></li>
                                                    <li><a href="/">Fillet Tables</a></li>
                                                    <li><a href="/">Rod Holders & Racks</a></li>
                                                    <li><a href="/">Fishing Line</a></li>
                                                    <li><a href="/">Fish Hooks</a></li>
                                                    <li><a href="/">Tackle Boxes</a></li>
                                                    <li><a href="/">Tackle Bags</a></li>
                                                    <li><a href="/">Utility Box</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </Flex>





                </Box>
                <Box onClick={() => navigate("/")} _hover={{ cursor: "pointer" }} height="100%" width="25%"><img style={{ width: "55%", marginTop: "-50px", marginLeft: "50px" }} src={Logo} alt="" /></Box>
                <Box display="flex" height="100%" width="35%">

                    <Center gap="10px" marginLeft={"260px"}>


                        <Box _hover={{ cursor: "pointer" }}><BiSearch size={25} /></Box>
                        <Box _hover={{ cursor: "pointer" }}> <BsFillPersonFill size={25} /> </Box>
                        <Box onClick={() => navigate("/wishlist")} display="flex" alignItems={"center"} _hover={{ cursor: "pointer" }}> <AiOutlineStar size={25} /><Text textAlign={"center"} background="#F16648" borderRadius={"50%"} marginTop={"-10px"} marginLeft={"-6px"} width="20px" height="20px" fontSize={14} color="white" fontWeight={600}>1</Text></Box>
                        <Box onClick={() => navigate("/wishlist")} _hover={{ cursor: "pointer" }} display="flex" alignItems={"center"}> <BiShoppingBag size={25} /><Text textAlign={"center"} background="#F16648" borderRadius={"52%"} marginTop={"-10px"} marginLeft={"-6px"} width="20px" height="20px" fontSize={14} color="white" fontWeight={600}>1</Text></Box>
                    </Center> </Box>
            </Box>






        </Box>





    )
}

export default Navbar
