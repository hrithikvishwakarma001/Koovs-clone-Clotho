import { Row, Table, Text, User } from "@nextui-org/react";

export default function OrdersTable({ orders }) {
	return (
		<Table
			bordered
			shadow={false}
			color='secondary'
			css={{
				height: "auto",
				minWidth: "100%",
				maxWidth: "1125px",
				width: "1125px",
			}}
			// selectionMode='multiple'
			striped>
			<Table.Header>
				<Table.Column>PRODUCT</Table.Column>
				<Table.Column>CATEGORY</Table.Column>
				<Table.Column>BRAND</Table.Column>
				<Table.Column>COLOR</Table.Column>
				<Table.Column>PRICE</Table.Column>
			</Table.Header>
			<Table.Body>
				{orders.map((order, idx) => (
					<Table.Row key={idx}>
						<Table.Cell>
							<Row>
								<User
									zoomed
									squared
									src={order.image[0].src}
									name={order.title}
									css={{ p: 0 }}>
									#{order.articleCode}
								</User>
							</Row>
						</Table.Cell>
						<Table.Cell>{order.category}</Table.Cell>
						<Table.Cell>{order.brandName}</Table.Cell>
						<Table.Cell>
							<Text
								css={{
									bg: order.swatches[0].colorCode,
									padding: "0.2rem",
									d: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								{order.swatches[0].colorName}
							</Text>
						</Table.Cell>
						<Table.Cell>{order.price}</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
			<Table.Pagination
				shadow
				noMargin
				align='center'
				rowsPerPage={3}
				onPageChange={(page) => console.log({ page })}
			/>
		</Table>
	);
}
