import React from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";

import { IconButton } from "./Table/IconButton";
import { EditIcon } from "./Table/EditIcon";
import { updateUser } from "../api/users.api";
import GenderSelect from "../utils/GenderSelect";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserEdit({ user, getUsers }) {
	const [visible, setVisible] = React.useState(false);
	const [data, setData] = React.useState(user);
	const handler = () => {
		// console.log("edit _id", data);
		setVisible(true);
	};

	const closeHandler = () => {
		setVisible(false);
	};
	const closeHandler2 = async () => {
		setVisible(false);
		const update = await updateUser(data._id, data);
		getUsers();
    console.log(update);
		toast.success("User Updated Successfully");
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	return (
		<div>
			<IconButton onClick={handler}>
				<EditIcon size={20} fill='#979797' />
			</IconButton>
			<ToastContainer />
			<Modal
				blur
				closeButton
				aria-labelledby='modal-title'
				open={visible}
				onClose={closeHandler}>
				<Modal.Header>
					<Text id='modal-title' size={18}>
						user ID &nbsp;
						<Text b size={18}>
							#{data._id}
						</Text>
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Input
						labelLeft='Name'
						placeholder='edit name'
						value={data.name}
						onChange={handleChange}
						name='name'
					/>
					<Input
						labelLeft='Email'
						placeholder='edit email'
						value={data.email}
						onChange={handleChange}
						name='email'
					/>
					<Input
						labelLeft='Password'
						placeholder='edit password'
						value={data.password}
						onChange={handleChange}
						name='password'
					/>
					<GenderSelect setData={setData} />
				</Modal.Body>
				<Modal.Footer>
					<Button auto flat color='error' onPress={closeHandler}>
						Close
					</Button>
					<Button auto onPress={closeHandler2}>
						Edit
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
