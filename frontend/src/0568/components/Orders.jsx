import {
	Collapse,
	Text,
	Grid,
	Avatar,
	Progress,
	Badge,
  Row,
} from "@nextui-org/react";
import Products from "./Products";
import { getOrders } from "../api/orders.api";
import React from "react";
import OrdersTable from "./OrdersTable";
import OrdersAddress from "./OrdersAddress";
import OrderDropDown from "../utils/OrderDropDown";
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
const colors = [
	"primary",
	"secondary",
	"success",
	"warning",
	"error",
	"info",
	"dark",
	"light",
];

const ordersEmojis = [
	"🚚",
	"🚛",
	"🛺",
	"🚜",
	"🚗",
	"🏍",
	"🚖",
	"🚔",
	"🚒",
	"🚎",
	"✈",
	"🚀",
];

export default function Orders() {
	const [products, setProducts] = React.useState([]);
	const getdata = async () => {
		let data = await getOrders();
		setProducts(data.orders);
	};

	React.useEffect(() => {
		getdata();
	}, []);
	// console.log(products);
	return products.length > 0 ? (
		<Grid.Container gap={2} justify='center'>
			<Grid>
				<Collapse.Group
					shadow
					splitted
					css={{
						p: "20px",
					}}>
					{products &&
						products.reverse().map((product, index) => (
							<Collapse
								key={product._id}
								title={
									<Text h5>
										{product.userInfo.name} |{" "}
										{`${product.cartData.length} orders 🎉`}
									</Text>
								}
								subtitle={`#${product._id}`}
								contentLeft={
									<Avatar
										size='lg'
										src={images[index % images.length]}
										color={colors[index % colors.length]}
										bordered
									/>
								}>
								<OrdersAddress
									{...product.address}
									credentials={product.credentials}
									createdAt={product.createdAt}
								/>
								<br />
								<OrdersTable orders={product.cartData} />
								<Row
                  align='center'
                  justify='space-between'
                  gap={2}
                  css={{
                    padding: "20px",
                  }}
                >
									<Text h4>
										Order total : ${product.total}
									</Text>
									<OrderDropDown/>
								</Row>
							</Collapse>
						))}
				</Collapse.Group>
			</Grid>
		</Grid.Container>
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
