import { Table } from "@nextui-org/react";

export default function OrdersAddress({
	pincode = "-",
	house = "-",
	area = "-",
	credentials,
	createdAt,
}) {
	return (
		<Table
			compact
			aria-label='Example static compact collection table'
			css={{
				height: "auto",
				minWidth: "100%",
			}}>
			<Table.Header>
				<Table.Column>PINCODE</Table.Column>
				<Table.Column>CARDHOLDER NAME</Table.Column>
				<Table.Column>CARD NUMBER</Table.Column>
				<Table.Column>EXPIRE DATE</Table.Column>
				<Table.Column>CVV</Table.Column>
				<Table.Column>AREA</Table.Column>
				<Table.Column>HOUSE NO.</Table.Column>
				<Table.Column>ORDER DATE</Table.Column>
			</Table.Header>
			<Table.Body>
				<Table.Row key='1'>
					<Table.Cell>{pincode}</Table.Cell>
					<Table.Cell>{credentials.cardName}</Table.Cell>
					<Table.Cell>{credentials.cardNumber}</Table.Cell>
					<Table.Cell>{credentials.cardExpiry}</Table.Cell>
					<Table.Cell>{credentials.cardCvv}</Table.Cell>
					<Table.Cell>{area}</Table.Cell>
					<Table.Cell>{house}</Table.Cell>
					<Table.Cell>{createdAt}</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	);
}
