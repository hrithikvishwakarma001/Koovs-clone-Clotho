import React from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { EditIcon } from "../Table/EditIcon";
import { IconButton } from "../Table/IconButton";
import { updateProduct } from "../../api/products.api";

export default function EditModal({ product, getData }) {
	const [visible, setVisible] = React.useState(false);
	const [data, setData] = React.useState(product);
	const handler = () => {
		// console.log("edit _id", data);
		setVisible(true);
	};

	const closeHandler = () => {
		setVisible(false);
	};
	const closeHandler2 = async () => {
		setVisible(false);
		const update = await updateProduct(product._id, data);
		getData();
		// console.log(update);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "image") {
			setData({ ...data, image: [{ src: value }] });
		} else if (name === "delimage") {
			setData({ ...data, image: [{ dataAltImage: value }] });
		} else {
			setData({ ...data, [name]: value });
		}
	};

	return (
		<div>
			<IconButton onClick={handler}>
				<EditIcon size={20} fill='#979797' />
			</IconButton>
			<Modal
				closeButton
				aria-labelledby='modal-title'
				open={visible}
				onClose={closeHandler}>
				<Modal.Header>
					<Text id='modal-title' size={18}>
						product ID &nbsp;
						<Text b size={18}>
							#{data._id}
						</Text>
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Input
						labelLeft='title'
						placeholder='edit title'
						value={data.title}
						onChange={handleChange}
						name='title'
					/>
					<Input
						labelLeft='category'
						placeholder='edit category'
						value={data.category}
						onChange={handleChange}
						name='category'
					/>
					<Input
						labelLeft='image#1'
						placeholder='edit image url'
						value={data.image[0].src}
						onChange={handleChange}
						name='image'
					/>
					<Input
						labelLeft='image#2'
						placeholder='edit image url'
						value={data.image[0].dataAltImage}
						onChange={handleChange}
						name='delimage'
					/>
					<Input
						labelLeft='price'
						placeholder='edit price'
						value={data.price}
						onChange={handleChange}
						name='price'
					/>
					<Input
						labelLeft='brandName'
						placeholder='edit brandname'
						value={data.brandName}
						onChange={handleChange}
						name='brandName'
					/>
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
