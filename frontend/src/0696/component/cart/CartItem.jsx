import {
	CloseButton,
	Flex,
	Link,
	Select,
	useColorModeValue,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
const QuantitySelect = (props) => {
	return (
		<Select
			maxW='64px'
			aria-label='Select quantity'
			focusBorderColor={useColorModeValue("blue.500", "blue.200")}
			{...props}>
			<option value='1'>1</option>
			<option value='2'>2</option>
			<option value='3'>3</option>
			<option value='4'>4</option>
		</Select>
	);
};

export const CartItem = (props) => {
	const {
		isGiftWrapping,
		name,
		_id,
		title,
		image,
		currency,
		price,
		onChangeQuantity,
		onClickDelete,
	} = props;
		const numericString = price.replace(/Rs|,|\./g, "");
		const priceNumber = parseFloat(numericString)/100;
	return (
		<Flex
			direction={{
				base: "column",
				md: "row",
			}}
			justify='space-between'
			align='center'>
			<CartProductMeta
				name={title}
				description={_id}
				image={image[0].src}
				isGiftWrapping={isGiftWrapping}
			/>

			{/* Desktop */}
			<Flex
				width='full'
				justify='space-between'
				display={{
					base: "none",
					md: "flex",
				}}>
				<QuantitySelect
					// value={1}
					onChange={(e) => {
						onChangeQuantity?.(+e.currentTarget.value);
					}}
				/>
				<PriceTag price={priceNumber} currency={currency} />
				<CloseButton
					aria-label={`Delete ${title} from cart`}
					onClick={onClickDelete}
				/>
			</Flex>

			{/* Mobile */}
			<Flex
				mt='4'
				align='center'
				width='full'
				justify='space-between'
				display={{
					base: "flex",
					md: "none",
				}}>
				<Link fontSize='sm' textDecor='underline'>
					Delete
				</Link>
				<QuantitySelect
					// value={1}
					onChange={(e) => {
						onChangeQuantity?.(+e.currentTarget.value);
					}}
				/>
				<PriceTag
					price={price}
					currency={currency}
					salePrice={price * 0.8}
				/>
			</Flex>
		</Flex>
	);
};
