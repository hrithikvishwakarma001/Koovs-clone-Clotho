import { Popover, User, Button, Grid, Tooltip } from "@nextui-org/react";
import { UserTwitterCard } from "./UserTwitterCard";
import { DeleteUser } from "./DeleteUser";

export default function App() {
	return (
		<Grid.Container gap={2} alignContent='center'>
			<Grid>
				<Tooltip placement='bottom' content={<UserTwitterCard />}>
					<User
						as='button'
						src='https://i.pravatar.cc/150'
						name='Hrithik Vishwakarma'
						description='Full-stack developer'
					/>
				</Tooltip>
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
