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
				}}>
				<Button onClick={() => setData("search")}>Search</Button>
				<Button onClick={() => setData("users")}>Users</Button>
				<Button onClick={() => setData("products")}>Products</Button>
			</Button.Group>
		</>
	);
}
