import { Text } from "@nextui-org/react";
import React from "react";

const Heading = () => {
	return (
		<>
			<Text
				size={45}
				css={{
					textGradient: "45deg, $yellow600 -20%, $red600 100%",
					textAlign: "center",
				}}
				weight='bold'>
				Welcome to Admin Panel
			</Text>
			<Text
				size={25}
				css={{
					textAlign: "center",
				}}
				weight='semibold'>
				Manage your users and products here
			</Text>
		</>
	);
};

export default Heading;
