import {
	Table,
	Row,
	Col,
	Tooltip,
	User,
	Text,
	Loading,
	Progress,
	Button,
	Popover,
} from "@nextui-org/react";
import { StyledBadge } from "./Table/StyledBadge";
import { IconButton } from "./Table/IconButton";
import { EyeIcon } from "./Table/EyeIcon";
import { DeleteIcon } from "./Table/DeleteIcon";
import { getProducts, deleteProduct } from "../api/products.api";
import React from "react";
// import { ProductsCard } from "../utils/ProductsCard";
import EditModal from "../components/EditProductModal";
import { DeleteButton } from "../utils/DeleteButton";
import ShowPreview from "./ShowPreview";
import PostProduct from "./PostProduct";

export default function Products() {
	const [products, setProducts] = React.useState([]);
	const columns = [
		{ name: "TITLE", uid: "title" },
		{ name: "CATEGORY", uid: "category" },
		{ name: "PRICE", uid: "price" },
		{ name: "ACTIONS", uid: "actions" },
	];

	const getdata = async () => {
		let data = await getProducts();
		setProducts(data.products);
	};

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
								<ShowPreview product={product} />
							</Tooltip>
						</Col>
						<Col css={{ d: "flex" }}>
							<Tooltip content='Edit products'>
								<EditModal
									product={product}
									getData={getdata}
								/>
							</Tooltip>
						</Col>
						<Col css={{ d: "flex" }}>
							<Tooltip content='Delete products' color='error'>
								<Popover>
									<Popover.Trigger>
										<IconButton>
											<DeleteIcon
												size={20}
												fill='#FF0080'
											/>
										</IconButton>
									</Popover.Trigger>
									<Popover.Content>
										<DeleteButton
											id={product._id}
											getData={getdata}
											deleteProduct={deleteProduct}
										/>
									</Popover.Content>
								</Popover>
							</Tooltip>
						</Col>
					</Row>
				);
			default:
				return cellValue;
		}
	};

	React.useEffect(() => {
		getdata();
	}, []);
	// console.log(products);
	return products.length > 0 ? (
		<Table
			color='warning'
			aria-label='Example table with custom cells'
			css={{
				height: "auto",
				minWidth: "100%",
			}}
			selectionMode='none'>
			<Table.Header columns={columns}>
				{(column) => {
					return column.uid === "actions" ? (
						<Table.Column
							key={column.uid}
							css={{
								d: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<PostProduct getdata={getdata} />
						</Table.Column>
					) : (
						<Table.Column key={column.uid} align='start'>
							{column.name}
						</Table.Column>
					);
				}}
			</Table.Header>
			<Table.Body items={products}>
				{(item) => {
					return (
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
					);
				}}
			</Table.Body>
			<Table.Pagination
				shadow
				noMargin
				align='center'
				rowsPerPage={6}
				// onPageChange={(page) => console.log({ page })}
			/>
		</Table>
	) : (
		<Progress
			indeterminated
			value={50}
			size='xs'
			striped
			color='warning'
			status='warning'
		/>
	);
}
