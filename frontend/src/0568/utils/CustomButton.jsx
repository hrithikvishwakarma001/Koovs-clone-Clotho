import { Button } from "@nextui-org/react";

export default function CustomButton({ setData }) {
	return (
		<>
			<Button.Group
				color='warning'
				flat
				ghost
				bordered='false'
				css={{
					mb: 50,
					w: "100%",
					justifyContent: "center",
					alignItems: "center",
					color: "black",
				}}>
				<Button shadow onClick={() => setData("search")}>
					Search
				</Button>
				<Button shadow onClick={() => setData("users")}>
					Users
				</Button>
				<Button shadow onClick={() => setData("products")}>
					Products
				</Button>
				<Button shadow onClick={() => setData("orders")}>
					Orders
				</Button>
			</Button.Group>
		</>
	);
}
