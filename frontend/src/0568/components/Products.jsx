import {
	Table,
	Row,
	Col,
	Tooltip,
	User,
	Text,
	Loading,
} from "@nextui-org/react";
import { StyledBadge } from "./Table/StyledBadge";
import { IconButton } from "./Table/IconButton";
import { EyeIcon } from "./Table/EyeIcon";
import { DeleteIcon } from "./Table/DeleteIcon";
import { EditIcon } from "./Table/EditIcon";
import getProducts from "../api/products.api";
import React from "react";
// import { ProductsCard } from "../utils/ProductsCard";

export default function Products() {
	const [products, setProducts] = React.useState([]);
	const columns = [
		{ name: "TITLE", uid: "title" },
		{ name: "CATEGORY", uid: "category" },
		{ name: "PRICE", uid: "price" },
		{ name: "ACTIONS", uid: "actions" },
	];

	const renderCell = (product, columnKey) => {
		const cellValue = product[columnKey];
		switch (columnKey) {
			case "title":
				return (
					<Col>
						{/* <Tooltip
							placement='left'
							content={<ProductsCard product={product} />}> */}
							<Row>
								<User
									zoomed
									squared
									src={product.image[0].src}
									name={cellValue}
									css={{ p: 0 }}>
									{product._id}
								</User>
							</Row>
						{/* </Tooltip> */}
					</Col>
				);
			case "category":
				return (
					<Col>
						<Row>
							<Text b size={14} css={{ tt: "capitalize" }}>
								{cellValue}
							</Text>
						</Row>
						<Row>
							<Text
								b
								size={13}
								css={{
									tt: "capitalize",
									bg: product?.swatches[0].colorCode,
								}}>
								{product?.swatches[0].colorCode}
							</Text>
						</Row>
					</Col>
				);
			case "price":
				return (
					<Col>
						<Row>
							<StyledBadge
								type={
									product.swatchesTotal % 2 == 0
										? "paused"
										: "active"
								}>
								{cellValue}
							</StyledBadge>
						</Row>
					</Col>
				);

			case "actions":
				return (
					<Row justify='center' align='center'>
						<Col css={{ d: "flex" }}>
							<Tooltip content='Details'>
								<IconButton
									onClick={() =>
										console.log(
											"View products",
											product._id
										)
									}>
									<EyeIcon size={20} fill='#979797' />
								</IconButton>
							</Tooltip>
						</Col>
						<Col css={{ d: "flex" }}>
							<Tooltip content='Edit products'>
								<IconButton
									onClick={() =>
										console.log(
											"Edit products",
											product._id
										)
									}>
									<EditIcon size={20} fill='#979797' />
								</IconButton>
							</Tooltip>
						</Col>
						<Col css={{ d: "flex" }}>
							<Tooltip
								content='Delete products'
								color='error'
								onClick={() =>
									console.log("Delete products", product._id)
								}>
								<IconButton>
									<DeleteIcon size={20} fill='#FF0080' />
								</IconButton>
							</Tooltip>
						</Col>
					</Row>
				);
			default:
				return cellValue;
		}
	};

	const getdata = async () => {
		let data = await getProducts();
		setProducts(data);
	};

	React.useEffect(() => {
		getdata();
	}, []);
	console.log(products);
	return (
		<Table
			color='warning'
			aria-label='Example table with custom cells'
			css={{
				height: "auto",
				minWidth: "100%",
			}}
			selectionMode='none'>
			<Table.Header columns={columns}>
				{(column) => (
					<Table.Column
						key={column.uid}
						hideHeader={column.uid === "actions"}
						align={column.uid === "actions" ? "center" : "start"}>
						{column.name}
					</Table.Column>
				)}
			</Table.Header>
			<Table.Body items={products}>
				{(item) => {
					return products ? (
						<Table.Row
							justify='center'
							align='center'
							key={item._id}>
							{(columnKey) => {
								return (
									<Table.Cell>
										{renderCell(item, columnKey)}
									</Table.Cell>
								);
							}}
						</Table.Row>
					) : (
						<Loading size='large' color='primary' />
					);
				}}
			</Table.Body>
			<Table.Pagination
				shadow
				noMargin
				align='center'
				rowsPerPage={6}
				onPageChange={(page) => console.log({ page })}
			/>
		</Table>
	);
}
