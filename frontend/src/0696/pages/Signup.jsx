import {
  Box,
  Button,
  Center,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../api/auth";

const initialState = {
  name: "",
  email: "",
  password: "",
  gender: "",
};

export default function Signup() {
  const [userData, setUserData] = useState(initialState);
  const toast = useToast();

  const HandleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async () => {
    // console.log(userData);
    const { name, email, password, gender } = userData;
    if (!name || !email || !password || !gender) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    try {
      let res = await register(userData);
      if (res.msg == "User registered successfully") {
        toast({
          title: "Registration Successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Registration Failed",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
    setUserData(initialState);
  };
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
            placeholder="Name"
            name="name"
            marginBottom={"20px"}
            value={userData.name}
            onChange={HandleChange}
          />
          <Input
            placeholder="Email"
            name="email"
            type="email"
            marginBottom={"20px"}
            value={userData.email}
            onChange={HandleChange}
          />
          <Input
            placeholder="Password"
            name="password"
            type="password"
            marginBottom={"20px"}
            value={userData.password}
            onChange={HandleChange}
          />
          <select
            style={{ width: "100%", padding: "10px" }}
            onChange={HandleChange}
            name="gender"
          >
            <option value="male">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="prefer not to say">Prefer not to say</option>
          </select>
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
            onClick={handleSubmit}
          >
            Register
          </Button>
          <Button width={"100%"} _hover={{ bg: "Black", color: "White" }}>
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
