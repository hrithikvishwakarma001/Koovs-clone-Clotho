import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function UserCard({ data }) {
	console.log("👻 -> file: UserCard.jsx:4 -> UserCard -> data:", data);

	const images = [
		"https://png.pngtree.com/png-clipart/20210713/ourmid/pngtree-japanese-social-media-male-user-avatar-png-image_3584406.jpg",
		"https://png.pngtree.com/png-clipart/20210713/ourmid/pngtree-social-media-male-college-student-user-avatar-png-image_3584401.jpg",
		"https://png.pngtree.com/png-clipart/20210713/ourmid/pngtree-japanese-social-media-boy-wearing-a-hat-user-avatar-png-image_3584403.jpg",
		"https://png.pngtree.com/png-clipart/20210713/ourmid/pngtree-japanese-style-male-user-avatar-png-image_3584395.jpg",
		"https://png.pngtree.com/png-clipart/20210718/original/pngtree-japanese-sports-male-social-media-avatar-png-image_6531262.jpg",
	];
	return (
		<Grid.Container gap={2} justify='flex-start'>
			{data !== "Something went wrong! Please try again later." ? (
				data.map((item, index) => (
					<Grid xs={6} sm={3} key={index}>
						<Card isPressable>
							<Card.Body css={{ p: 0 }}>
								<Card.Image
									src={images[index % data.length]}
									objectFit='cover'
									width='100%'
									height={140}
									alt={item.name}
								/>
							</Card.Body>
							<Card.Footer css={{ justifyItems: "flex-start" }}>
								<Row
									wrap='wrap'
									justify='space-between'
									align='center'>
									<Text b>name: {item.name}</Text>
									<Text b>email: {item.email}</Text>
									<Text
										css={{
											color: "$accents7",
											fontWeight: "$semibold",
											fontSize: "$sm",
										}}>
										id: #{item._id}
									</Text>
								</Row>
							</Card.Footer>
						</Card>
					</Grid>
				))
			) : (
				<Grid>
					<Text b>{data}</Text>
				</Grid>
			)}
		</Grid.Container>
	);
}
