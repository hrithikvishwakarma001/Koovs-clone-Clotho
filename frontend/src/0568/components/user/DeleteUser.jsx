
import { Text, Button, Grid, Row } from "@nextui-org/react";

export const DeleteUser = () => {
	return (
		<Grid.Container
			css={{
				borderRadius: "14px",
				padding: "0.75rem",
				maxWidth: "330px",
			}}>
			<Row justify='center' align='center'>
				<Text b>Confirmation</Text>
			</Row>
			<Row>
				<Text
          css={{
            py: "$10",
            textAlign: "center",
            ml: "$15",
          }}
        >
					Are you sure you want to logout ? 
				</Text>
			</Row>
			<Grid.Container justify='space-between' alignContent='center'>
				<Grid>
					<Button size='sm' light>
						Cancel
					</Button>
				</Grid>
				<Grid>
					<Button size='sm' shadow color='error'>
						Yes
					</Button>
				</Grid>
			</Grid.Container>
		</Grid.Container>
	);
};
