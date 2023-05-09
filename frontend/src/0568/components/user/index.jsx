import { Popover, User, Button, Grid, Tooltip } from "@nextui-org/react";
import { UserTwitterCard } from "./UserTwitterCard";
import { DeleteUser } from "./DeleteUser";
const images = [
	"https://cdn.dribbble.com/userupload/3990383/file/original-94bad88747d2c5db8c5bbdafb1144a9a.jpg?compress=1&resize=1200x900",
	"https://cdn.dribbble.com/userupload/3990398/file/original-8baa59393c2bcc65d26c02dbcadd8b94.jpg?compress=1&resize=1200x900",
	"https://cdn.dribbble.com/userupload/3990402/file/original-7fe8e2df6819426b20d5316b361fdde3.jpg?compress=1&resize=1200x900",
	"https://cdn.dribbble.com/userupload/3990394/file/original-3977affb1fece5685f3a953d5e088662.jpg?compress=1&resize=1200x900",
	"https://cdn.dribbble.com/userupload/3990371/file/original-a710993a582d6bc7de5b9ca57ac5b3e5.jpg?compress=1&resize=1200x900",
	"https://cdn.dribbble.com/userupload/3990379/file/original-36044971ae30c0aff1254814d23d5ace.jpg?compress=1&resize=1200x900",
	"https://cdn.dribbble.com/userupload/3990390/file/original-91871ff78db195092569d2cfa9fa2ee0.jpg?compress=1&resize=1200x900",
	"https://cdn.dribbble.com/userupload/3990325/file/original-145e76393754b84d567d7f7fe1ff2a26.jpg?compress=1&resize=1200x900",
	"https://cdn.dribbble.com/userupload/3758738/file/original-fae32cd8a08eeb98142435e94fa56fa8.jpg?compress=1&resize=1200x900",
	"https://cdn.dribbble.com/users/230875/screenshots/12589592/media/a12435c0fd22de967b379b098f606683.jpg?compress=1&resize=1200x900",
	"https://cdn.dribbble.com/users/230875/screenshots/14109430/media/79355b938c72936745827c87688bdc53.jpg?compress=1&resize=1200x900",
];
export default function App() {
	return (
		<Grid.Container gap={2} alignContent='center'>
			<Grid>
				<Tooltip
					placement='bottom'
					// content={<UserTwitterCard image={images[0]} />}
					>
					<User
						as='button'
						src={images[0]}
						name='admin'
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
