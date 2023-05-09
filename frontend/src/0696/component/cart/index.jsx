import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Box,
	Flex,
	Heading,
	HStack,
	Stack,
	useColorModeValue as mode,
	Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { toast } from "react-toastify";
import { deleteCart, getCart } from "../../../0035/Redux/ProductReducer/action";
import { ADD_TO_CART } from "../../../0035/Redux/ProductReducer/actionType";

const CartIndex = () => {
	const { cart } = useSelector((state) => state.ProductReducer);
	const { token } = useSelector((state) => state.authReducer);
	const [quantity, setQuantity] = React.useState(1);
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		const newCart = cart.filter((item) => item._id !== id);
		dispatch({ type: ADD_TO_CART, payload: newCart });
		deleteCart(id, token);
		toast.success("Product deleted from cart");
	};
	useEffect(() => {
		document.title = "cart page";
		dispatch(getCart(token));
	}, []);

	const totalWithQuantity = cart.reduce((acc, item) => {
		const numericString = item.price.replace(/Rs|,|\./g, "");
		const priceNumber = parseFloat(numericString);
		// console.log("priceNumber", priceNumber);
		return acc + (priceNumber/100) * quantity;
	}, 0);
  
	return (
		<Box
			maxW={{
				base: "3xl",
				lg: "7xl",
			}}
			mx='auto'
			px={{
				base: "4",
				md: "8",
				lg: "12",
			}}
			py={{
				base: "6",
				md: "8",
				lg: "12",
			}}>
			<Stack
				direction={{
					base: "column",
					lg: "row",
				}}
				align={{
					lg: "flex-start",
				}}
				spacing={{
					base: "8",
					md: "16",
				}}>
				<Stack
					spacing={{
						base: "8",
						md: "10",
					}}
					flex='2'>
					<Heading fontSize='2xl' fontWeight='extrabold'>
						Shopping Cart ({cart.length} items)
					</Heading>
					{!cart.length && (
						<Image src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png' />
					)}
					<Stack spacing='6'>
						{cart.map((item, idx) => (
							<CartItem
								key={idx}
								{...item}
								onClickDelete={() => handleDelete(item._id)}
								onChangeQuantity={(quantity) =>
									setQuantity(quantity)
								}
							/>
						))}
					</Stack>
				</Stack>

				<Flex direction='column' align='center' flex='1'>
					<CartOrderSummary total={totalWithQuantity} cart={cart} />
					<HStack mt='6' fontWeight='semibold'>
						<p>or</p>
						<Link
							color={mode("blue.500", "blue.200")}
							to='/product'>
							Continue shopping
						</Link>
					</HStack>
				</Flex>
			</Stack>
		</Box>
	);
};

export default CartIndex;
