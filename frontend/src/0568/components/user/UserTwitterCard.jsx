import React from "react";
import { User, Row, Col, Text, Button, Spacer, Grid } from "@nextui-org/react";

export const UserTwitterCard = ({image}) => {
	const [following, setFollowing] = React.useState(false);

	return (
		<Grid.Container
			className='user-twitter-card__container'
			css={{
				mw: "270px",
				borderRadius: "$lg",
				padding: "$sm",
			}}>
			<Row justify='space-around' align='center'>
				<Col span={8}>
					<User
						src={image}
						name='Hrithik'
						description='@hrithikv05'
						css={{ px: 0 }}
					/>
				</Col>
				<Col span={4}>
					<Row>
						<Button
							auto
							rounded
							onPress={() => setFollowing(!following)}
							css={{
								maxHeight: "$space$12",
								fs: "$xs",
								fontWeight: "$semibold",
								borderColor: following
									? "$foreground"
									: "$primary",
								color: following ? "$foreground" : "$white",
							}}
							color='primary'
							bordered={following}>
							{following ? "Unfollow" : "Follow"}
						</Button>
					</Row>
				</Col>
			</Row>
			<Grid.Container className='user-twitter-card__username-container'>
				<Grid xs={12}>
					<Text
						className='user-twitter-card__text'
						size={14}
						css={{ mt: "$1" }}
						color='#888888'>
						Full-stack developer 🎉
					</Text>
				</Grid>
			</Grid.Container>

			<Grid.Container
				className='user-twitter-card__metrics-container'
				justify='flex-start'
				alignContent='center'>
				<Text
					className='user-twitter-card__text'
					size={14}
					color='#888888'>
					<Text
						b
						color='foreground'
						className='user-twitter-card__text'
						size={14}>
						4
					</Text>
					Following
				</Text>
				<Spacer inline x={0.5} />
				<Text
					className='user-twitter-card__text'
					size={14}
					color='#888888'>
					<Text
						b
						color='foreground'
						className='user-twitter-card__text'
						size={14}>
						97.1K
					</Text>
					Followers
				</Text>
			</Grid.Container>
		</Grid.Container>
	);
};
