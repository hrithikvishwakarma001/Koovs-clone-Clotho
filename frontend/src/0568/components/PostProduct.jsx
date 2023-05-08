import React from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import CustomSelect from "../utils/CustomSelect";
import { addProduct } from "../api/products.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function PostProduct({ getdata }) {
	const [visible, setVisible] = React.useState(false);
	const [data, setData] = React.useState({
		title: "",
		category: "",
		image: [{ src: "", dataAltImage: "" }],
		price: "",
		brandName: "",
		swatches: [{ colorCode: "" }],
	});
	const handler = () => {
		setVisible(true);
	};

	const closeHandler = () => {
		setVisible(false);
	};
	const closeHandler2 = async () => {
		setVisible(false);
		console.log(data);

		const { title, category, image, price, brandName, swatches } = data;

		if (
			title === "" ||
			category === "" ||
			image[0].src === "" ||
			price === "" ||
			brandName === "" ||
			swatches[0].colorCode === ""
		) {
			toast.error("Please fill all the fields");
			return;
		}

		const post = await addProduct(data);
		getdata();
		console.log(post);
		setData({
			title: "",
			category: "",
			image: [{ src: "", dataAltImage: "" }],
			price: "",
			brandName: "",
			swatches: [{ colorCode: "" }],
		});
		toast.success("Product Added Successfully");
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "image") {
			setData({ ...data, image: [{ src: value }] });
		} else if (name === "delimage") {
			setData({ ...data, image: [{ dataAltImage: value }] });
		} else if (name === "colorCode") {
			setData({ ...data, swatches: [{ colorCode: value }] });
		} else {
			setData({ ...data, [name]: value });
		}
	};

	return (
		<div>
			<Button auto size='sm' color='success' shadow onClick={handler}>
				Add Product
			</Button>
			<ToastContainer />
			<Modal
				blur
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
					<CustomSelect setData={setData} />
					<Input
						labelLeft='title'
						placeholder='edit title'
						value={data.title}
						onChange={handleChange}
						name='title'
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
					<Input
						labelLeft='image#1'
						placeholder='edit image url'
						value={data.image[0].dataAltImage}
						onChange={handleChange}
						name='delimage'
					/>
					<Input
						labelLeft='image#2'
						placeholder='edit image url'
						value={data.image[0].src}
						onChange={handleChange}
						name='image'
					/>
					<Input
						labelLeft='colorCode'
						placeholder='edit colorCode'
						value={data.swatches[0].colorCode}
						onChange={handleChange}
						name='colorCode'
						type='color'
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button auto flat color='error' onPress={closeHandler}>
						Close
					</Button>
					<Button
						auto
						onPress={closeHandler2}
						color={
							data.title === "" ||
							data.category === "" ||
							data.image[0].src === "" ||
							data.image[0].dataAltImage === "" ||
							data.price === "" ||
							data.brandName === "" ||
							data.swatches[0].colorCode === ""
								? "error"
								: "success"
						}
						shadow>
						Add
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
