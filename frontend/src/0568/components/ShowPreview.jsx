import React from "react";
import { Modal, Image, Text, Link, Grid } from "@nextui-org/react";
import { IconButton } from "./Table/IconButton";
import { EyeIcon } from "./Table/EyeIcon";

export default function ShowPreview({ product }) {
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
	const closeHandler = () => {
		setVisible(false);
	};
	return (
		<div>
			<IconButton color='error' onClick={handler}>
				<EyeIcon size={20} fill='#979797' />
			</IconButton>

			<Modal
				closeButton
				open={visible}
				onClose={closeHandler}
				width='600px'>
				<Modal.Body>
					<Grid.Container
						gap={1}
						justify='center'
						alignContent='center'>
						<Grid
							xs={12}
							md={6}
							css={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Image
								src={product.image[0].src}
								width='100%'
								alt='product image'
								objectFit={"contain"}
							/>
						</Grid>
						<Grid xs={12} md={6}>
							<Text h2>{product.title}</Text>
							<Image
								src={product.image[0].dataAltImage}
								width='100%'
								alt='product image'
								objectFit={"contain"}
							/>
						</Grid>
					</Grid.Container>
				</Modal.Body>
			</Modal>
		</div>
	);
}
