import { Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState={
    First_Name:"",
    Last_Name:"",
    email:"",
    password:"",
}

export default function Signup() {
    const [userData, setUserData]=useState(initialState)


    const HandleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setUserData({...userData, [name]:value})
    }

  return (
    <Box>
      <Text fontSize={"34px"} lineHeight={"44px"} textAlign={"center"}>
        Register
      </Text>
      <Center gap={"10px"} fontSize={"18px"} marginTop={"15px"}>
        <Link to="/">
          <Text _hover={{ color: "grey" }}>Home</Text>
        </Link>
        <h2>&gt;</h2>
        <h3>Create Account</h3>
      </Center>
      <Box id="login-form-div" width={"50%"} margin={"auto"}>
        <VStack alignItems={"start"} gap={"10px"} marginBottom={"20px"}>
          <Text fontSize={"1.5rem"} lineHeight={"2rem"}>
            Register
          </Text>
          <Input
            placeholder="First Name"
            name="First_Name"
            marginBottom={"20px"}
            value={""}
            onChange={HandleChange}
          />
          <Input
            placeholder="Last Name"
            name="Last_Name"
            marginBottom={"20px"}
            value={""}
            onChange={HandleChange}
          />
          <Input
            placeholder="Email"
            name="email"
            marginBottom={"20px"}
            value={""}
            onChange={HandleChange}
          />
          <Input
            placeholder="Password"
            name="password"
            marginBottom={"20px"}
            value={""}
            onChange={HandleChange}
          />
          <Text>
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </Text>
        </VStack>
        <VStack id="Login-Btn-div" gap={"5px"}>
          <Button
            backgroundColor="Black"
            color={"white"}
            width={"100%"}
            _hover={{ zoom: "110%" }}
            onClick={""}
          >
            Register
          </Button>
          <Button
            width={"100%"}
            _hover={{ bg: "Black", color: "White" }}
          >
            <Link to={"/login"}> Log In</Link>
           
          </Button>
          <VStack width={"100%"} gap={"10px"}>
            <Button
              bg={"#3b5998"}
              color={"white"}
              width={"100%"}
              _hover={{ bg: "#627aad" }}

            >
              Sign in with Facebook
            </Button>
            <Button
              bg={"#dd4b39"}
              color={"white"}
              width={"100%"}
              _hover={{ bg: "#e46f61" }}
            >
              Sign in with Google
            </Button>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}
