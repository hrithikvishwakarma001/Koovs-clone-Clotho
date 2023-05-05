import { Popover, User, Button, Grid } from "@nextui-org/react";
import { UserTwitterCard } from "./UserTwitterCard";
import { DeleteUser } from "./DeleteUser";

export default function App() {
	return (
		<Grid.Container gap={2} alignContent='center'>
			<Grid>
				<Popover>
					<Popover.Trigger>
						<User
							as='button'
							src='https://i.pravatar.cc/150'
							name='Hrithik Vishwakarma'
							description='Full-stack developer'
						/>
					</Popover.Trigger>
					<Popover.Content css={{ px: "$4", py: "$2" }}>
						<UserTwitterCard />
					</Popover.Content>
				</Popover>
			</Grid>
			<Grid>
				<Popover>
					<Popover.Trigger>
						<Button color='error' auto flat>
							Logout
						</Button>
					</Popover.Trigger>
					<Popover.Content>
						<DeleteUser />
					</Popover.Content>
				</Popover>
			</Grid>
		</Grid.Container>
	);
}
