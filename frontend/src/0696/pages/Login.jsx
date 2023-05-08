import {
	Button,
	Center,
	Flex,
	Input,
	Text,
	VStack,
	HStack,
	Spacer,
	Box,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getLogin } from "../../0035/Redux/AuthReducer/action";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [IsUserKnowPassword, setIsUserKnowPassword] = useState(true);
	const dispatch = useDispatch();
	const { isAuth,token } = useSelector((state) => state.authReducer);
	const toast = useToast();
	const navigate = useNavigate();
	const HandleLogin = async () => {
		// console.log({email, password});
		if (!email || !password) {
			toast({
				title: "Please fill all the fields",
				status: "warning",
				duration: 3000,
				isClosable: true,
			});
			return;
		}

		if (email == "admin@gmail.com" && password == "admin1432") {
			navigate("/admin/dashboard");
			toast({
				title: "Admin Login Successful",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
			return;
		}
		if (email == "admin@gmail.com" && password !== "admin1432") {
			toast({
				title: "Admin Login failed",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
			return;
		}

		dispatch(getLogin({ email, password }));
		setEmail("");
		setPassword("");
	};
	
	if(isAuth){
		navigate("/");
	}

	console.log("token",token);
	return (
		<div>
			<Text fontSize={"34px"} lineHeight={"44px"} textAlign={"center"}>
				Log In
			</Text>
			<Center gap={"10px"} fontSize={"18px"} marginTop={"15px"}>
				<Link to='/'>
					<Text _hover={{ color: "grey" }}>Home</Text>
				</Link>
				<h2>&gt;</h2>
				<h3>Account</h3>
			</Center>

			<Flex id='login-main-div' margin={"30px"} gap={"40px"}>
				{IsUserKnowPassword ? (
					<Box id='login-form-div' width={"50%"}>
						<VStack
							alignItems={"start"}
							gap={"10px"}
							marginBottom={"20px"}>
							<Text fontSize={"1.5rem"} lineHeight={"2rem"}>
								Log In
							</Text>
							<Input
								placeholder='Email'
								type='email'
								marginBottom={"20px"}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Input
								placeholder='Password'
								type='password'
								marginBottom={"20px"}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Text
								as='u'
								onClick={() => setIsUserKnowPassword(false)}
								_hover={{ cursor: "pointer" }}>
								Forgot your password?
							</Text>
						</VStack>
						<VStack id='Login-Btn-div' gap={"5px"}>
							<Button
								backgroundColor='Black'
								color={"white"}
								width={"100%"}
								_hover={{ zoom: "110%" }}
								onClick={HandleLogin}>
								Log In
							</Button>

							<Button
								bg={"#3b5998"}
								color={"white"}
								width={"100%"}
								_hover={{ bg: "#627aad" }}>
								Sign in with Facebook
							</Button>
							<Button
								bg={"#dd4b39"}
								color={"white"}
								width={"100%"}
								_hover={{ bg: "#e46f61" }}>
								Sign in with Google
							</Button>
						</VStack>
					</Box>
				) : (
					<VStack
						id='login-form-div'
						width={"50%"}
						alignItems={"start"}
						gap={"10px"}>
						<Text fontSize={"1.5rem"} lineHeight={"2rem"}>
							Reset your password
						</Text>
						<label>
							We will send you an email to reset your password.
						</label>
						<Input
							placeholder='Email'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<HStack alignContent={"space-around"}>
							<Button
								backgroundColor='Black'
								color={"white"}
								width={"70%"}
								_hover={{ zoom: "110%" }}>
								Submit
							</Button>
							<Spacer />
							<Button
								bg='white'
								onClick={() => setIsUserKnowPassword(true)}>
								Cancel
							</Button>
						</HStack>
					</VStack>
				)}
				<VStack width={"50%"} alignItems={"start"} gap={"15px"}>
					<Text fontSize={"1.5rem"} lineHeight={"2rem"}>
						New Customer
					</Text>
					<Text textAlign={"left"}>
						Sign up for early Sale access plus tailored new
						arrivals, trends and promotions. To opt out, click
						unsubscribe in our emails.
					</Text>
					<Button
						backgroundColor='Black'
						color={"white"}
						width={"20%"}
						_hover={{ zoom: "110%" }}>
						<Link to={"/signup"}>Register</Link>
					</Button>
				</VStack>
			</Flex>
		</div>
	);
}
