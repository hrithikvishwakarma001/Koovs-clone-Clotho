import { Text } from "@nextui-org/react";
import Cards from "../components/Card";
import Tables from "../components/Table";
import Heading from "../components/Heading";
import User  from "../components/user"
export default function Admin() {
	return (
		<div
			style={{
				maxWidth: "1300px",
				width: "100vw",
			}}>
			<Heading />
			<User />
			<Cards />
			<Text blockquote style={{ fontSize: "1", fontWeight: "bold" }}>
				All users
			</Text>
			<Tables />
		</div>
	);
}
