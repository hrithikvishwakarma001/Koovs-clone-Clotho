import {
	Table,
	Row,
	Col,
	Tooltip,
	User,
	Text,
	Loading,
	Progress,
	Popover,
} from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import React from "react";
import { deleteUser, getUsers } from "../../api/users.api";
import UserEdit from "../UserEdit";
import { DeleteButton } from "../../utils/DeleteButton";
export default function Tables() {
	const [users, setUsers] = React.useState([]);
	const columns = [
		{ name: "USER", uid: "name" },
		{ name: "GENDER", uid: "gender" },
		{ name: "STATUS", uid: "status" },
		{ name: "ACTIONS", uid: "actions" },
	];
	const getdata = async () => {
		let data = await getUsers();
		// console.log(data);
		setUsers(data);
	};
	const renderCell = (user, columnKey) => {
		const cellValue = user[columnKey];
		switch (columnKey) {
			case "name":
				return (
					<Col>
						<Row>
							<User
								squared
								src={"https://i.pravatar.cc/150"}
								name={cellValue}
								css={{ p: 0 }}>
								{user.email}
							</User>
						</Row>
					</Col>
				);
			case "gender":
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
								css={{ tt: "capitalize", color: "$accents7" }}>
								{user._id}
							</Text>
						</Row>
					</Col>
				);
			case "status":
				return (
					<Col
						css={{
							d: "flex",
							fd: "column",
							gap: "0.5rem",
							w: "auto",
						}}>
						<StyledBadge
							type={user.createdAt ? "active" : "paused"}>
							{user.createdAt}
						</StyledBadge>
						<StyledBadge
							type={user.updatedAt ? "paused" : "active"}>
							{user.createdAt}
						</StyledBadge>
					</Col>
				);

			case "actions":
				// console.log("actions", getdata);
				return (
					<Row justify='center' align='center'>
						<Col css={{ d: "flex" }}>
							<Tooltip content='Edit user'>
								<UserEdit user={user} getUsers={getdata} />
							</Tooltip>
						</Col>
						<Col css={{ d: "flex" }}>
							<Tooltip
								content='Delete user'
								color='error'>
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
											id={user._id}
											getData={getdata}
											deleteProduct={deleteUser}
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
	return users.length > 0 ? (
		<Table
			color='error'
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
			{users ? (
				<Table.Body items={users}>
					{(item) => (
						<Table.Row
							justify='center'
							align='center'
							key={item._id}>
							{(columnKey) => (
								<Table.Cell>
									{renderCell(item, columnKey)}
								</Table.Cell>
							)}
						</Table.Row>
					)}
				</Table.Body>
			) : (
				<Loading type='spinner' color='currentColor' size='sm' />
			)}
			<Table.Pagination
				shadow
				noMargin
				align='center'
				rowsPerPage={3}
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
