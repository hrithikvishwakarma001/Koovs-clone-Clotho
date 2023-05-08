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
								src={images[Math.floor(Math.random() * 10)]}
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
							<Tooltip content='Delete user' color='error'>
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
				rowsPerPage={5}
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
