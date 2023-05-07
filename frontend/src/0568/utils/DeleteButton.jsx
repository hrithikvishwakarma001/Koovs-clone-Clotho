import { Text, Button, Grid, Row } from "@nextui-org/react";

export const DeleteButton = ({ id, getData, deleteProduct }) => {
	const handleClick = async () => {
		let res = await deleteProduct(id);
		// console.log(res);
		getData();
	};
	return (
		<Grid.Container
			css={{
				borderRadius: "14px",
				padding: "0.75rem",
				maxWidth: "330px",
			}}>
			<Row justify='center' align='center'>
				<Text b>Confirm</Text>
			</Row>
			<Row>
				<Text>
					Are you sure you want to delete this product ? By doing
					this, you will not be able to recover the data.
				</Text>
			</Row>
			<Grid.Container justify='center' alignContent='center'>
				<Grid>
					<Button
						size='sm'
						shadow
						color='error'
						onClick={handleClick}>
						Delete
					</Button>
				</Grid>
			</Grid.Container>
		</Grid.Container>
	);
};
