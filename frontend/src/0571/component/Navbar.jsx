import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  SimpleGrid,
  Center,
  UnorderedList,
} from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from "react-icons/ai";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import {
  List,
  ListItem,
  ListIcon,

 
} from '@chakra-ui/react'
import { BiChevronDown, BiSearch, BiShoppingBag } from "react-icons/bi"
import { useMediaQuery } from '@chakra-ui/react'
import { AiOutlineStar } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import Logo from "../Img/logo2.png"
import { useNavigate} from "react-router-dom";
import Search from '../pages/Search';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
const[wish,setwish]=useState([])
const [update,setupdate]=useState(false)
const {cart}=useSelector(state=>state.ProductReducer)

  let navigate = useNavigate();
  const getProducts = async () => {
       
    try {
      const response = await axios.get("https://636a17f3c07d8f936d92dd55.mockapi.io/fas")
      setwish(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    getProducts()
  
  },[update])
const wishdata=wish.length

  return (
    <>

      {/* <Box 
       display={{sm:"none" , md:"none",lg:"block"}}
      borderBottom="1px solid lightgray" width="100%" height="40%" paddingBottom={"4px"} paddingTop={"15px"}>


        <Box display="flex" marginTop={"-5px"} paddingBottom="10px" paddingLeft={"50px"} paddingRight={"40px"} >
          <Box display="flex">
            <Center><FaFacebookF size={16} /> <Text _hover={{ cursor: "pointer" }} marginLeft="5px" marginRight="15px" fontSize={15} >1.8M Followers</Text> <AiOutlineInstagram size={17} /> <Text fontSize={15} marginLeft="5px" _hover={{ cursor: "pointer" }}>628k Followers</Text></Center>
          </Box>
          <Box marginLeft={"16%"}> <Text _hover={{ cursor: "pointer" }} fontSize={15}>Open doors to a world of fashion | Young and fresh</Text>
         
          </Box>
          <Box marginLeft={"30%"}>

            <Center>
              <Text fontSize={15} _hover={{ cursor: "pointer" }}>English</Text><BiChevronDown />
            </Center>


          </Box>

        </Box>






      </Box> */}


      <Box>

        <Flex
       
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>

          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />

          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>


            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
    <img onClick={()=>navigate("/")} style={{width:"10%", marginRight:"28%" }} src={Logo} alt="" />
          <Stack

            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            marginRight={39.5}
            spacing={4}>

            {/* <BiSearch size={25} /> */}
            
            <Tooltip hasArrow label='Search' bg='gray.300' color='black'>
            <Box  marginRight={"-15px"}>   <Search/></Box>
    </Tooltip>
     
    <Tooltip hasArrow label='Account' bg='gray.300' color='black'>
           <Box paddingTop={"7px"} onClick={() => navigate("/login")}_hover={{ cursor: "pointer" }}><BsFillPersonFill size={25} /></Box> 
           </Tooltip>
           <Tooltip hasArrow label='Wishlist' bg='gray.300' color='black'>
            <Box onClick={() =>{ 
 navigate("/wishlist")
 setupdate(!update)

            } } display="flex" alignItems={"center"} _hover={{ cursor: "pointer" }}> <AiOutlineStar size={25} /><Text textAlign={"center"} background="#F16648" borderRadius={"50%"} marginTop={"-10px"} marginLeft={"-6px"} width="20px" height="20px" fontSize={14} color="white" fontWeight={600}>{wishdata}</Text></Box>
</Tooltip>
<Tooltip hasArrow label='Cart' bg='gray.300' color='black'>
            <Box onClick={() => navigate("/cart")} _hover={{ cursor: "pointer" }} display="flex" alignItems={"center"}> <BiShoppingBag size={25} /><Text textAlign={"center"} background="#F16648" borderRadius={"52%"} marginTop={"-10px"} marginLeft={"-6px"} width="20px" height="20px" fontSize={14} color="white" fontWeight={600}>{cart.length}</Text></Box>
</Tooltip>


          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>

    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} ml="-20px" spacing={2} >

      {NAV_ITEMS.map((navItem,i) => (
        <Box key={i}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link 
               
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                width={'150%'}>
                <Box w="100%" display="flex" justifyContent={"space-between"}>
                  {navItem.children.map((child,i) => (
                    <DesktopSubNav key={i} {...child} />
                  ))}
                </Box>
              </PopoverContent>
            )}
          </Popover>

        </Box>
      ))}


    </Stack>

  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}

      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>


      <Box >
        <Text 
          transition={'all .3s ease'}
          _groupHover={{ color: 'pink.400' }}
          fontWeight={500}>
          {label}
        </Text>
        <Text fontSize={'sm'} fontWeight={500}>{subLabel.map((e,i) =>
          <Box key={i} mt="20px"> <ul>{e.sub}</ ul> </Box>

        )}</Text>
      </Box>





    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem,index) => (
        <MobileNavItem key={index} {...navItem} />
      ))}

    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child,index) => (
              <Link key={index} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};



const NAV_ITEMS = [
  {
    label: 'Mens',
    children: [
      {
        label: 'Clothing',
        subLabel: [
          { sub: "New In" },
          { sub: "View All" },
          { sub: "T-Shirts" },
          { sub: "Jackets & Codes" },
          { sub: "Hodeies & SweatT-shirts" },
          { sub: "Sweatpants" },
          { sub: "Shorts" },
          { sub: "Co-ord sets" }
        ],

        href: '/product',
      }
      , {
        label: 'Brands',
        subLabel: [
          { sub: "Essentials by koovs" },
          { sub: "Ball Copenhagen" },
          { sub: "Bravesoul" },
          { sub: "The couture club" },
          { sub: "Arkk cooenhagen" },
          { sub: "SHU" },
          { sub: "Nike" },
          { sub: "Tigerbear" }


        ],
        href: '/product',
      },
      {
        label: 'Footwear',
        subLabel: [
          { sub: "View All" },
          { sub: "Sneakers" },
          { sub: "Slides" }

        ],
        href: '/product',
      },
      {
        label: 'Accessories',
        subLabel: [
          { sub: "Sunglasses" },
          { sub: "Caps 7 Hats" },
          { sub: "Pins" }

        ],
        href: '/product',
      }
    ],
   
  },
  {
    label: 'Womens',
    children: [
      {
        label: 'Clothing',
        subLabel: [
          { sub: "New In" },
          { sub: "View All" },
          { sub: "T-Shirts" },
          { sub: "Jackets & Codes" },
          { sub: "Hodeies & SweatT-shirts" },
          { sub: "Sweatpants" },
          { sub: "Shorts" },
          { sub: "Co-ord sets" }
        ],

        href: '/product',
      }
      , {
        label: 'Brands',
        subLabel: [
          { sub: "Essentials by koovs" },
          { sub: "Ball Copenhagen" },
          { sub: "Bravesoul" },
          { sub: "The couture club" },
          { sub: "Arkk cooenhagen" },
          { sub: "SHU" },
          { sub: "Nike" },
          { sub: "Tigerbear" }


        ],
        href: '/product',
      },
      {
        label: 'Footwear',
        subLabel: [
          { sub: "View All" },
          { sub: "Sneakers" },
          { sub: "Slides" }

        ],
        href: '/product',
      },
      {
        label: 'Accessories',
        subLabel: [
          { sub: "Sunglasses" },
          { sub: "Caps 7 Hats" },
          { sub: "Pins" }

        ],
        href: '#',
      }
    ],
  
  },
  {
    label: 'Learn Design',
    href: '/product',
    children: [
      {

        subLabel: [
          { sub: "George Thomasam" },
          { sub: "Boomrang" },
        ],
        href: '/product',
      },

    ],
  },
  {
    label: 'Hire Designers',
    href: '#',
    children: [
      {

        subLabel: [
          { sub: "Y2K" },
          { sub: "Good Fest" },
          { sub: "Summer Peast" },
          { sub: "Vercity" },
          { sub: "Rectograde" },
          { sub: "Fill Grade" }
        ],
        href: '/product',
      },

    ],
  },

];