import React from "react";
import Cards from "../components/Card";
import Tables from "../components/Table";
import Heading from "../components/Heading";
import User  from "../components/user"
import CustomButton from "../utils/CustomButton";
import Products from "../components/Products";
export default function Admin() {
	const [data, setData] = React.useState("products");

	return (
		<div
			style={{
				maxWidth: "1300px",
				width: "100vw",
				margin: "auto",
				padding: "20px",
				height: "100vh",
			}}
			>
			<Heading />
			<User />
			<CustomButton setData={(el) => setData(el)} />
			{data === "search" && <Cards />}
			{data === "users" && <Tables />}
			{data === "products" && <Products />}
		</div>
	);
}
