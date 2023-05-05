import { Button, Card, Input, Loading } from "@nextui-org/react";
import React from "react";
export default function Cards() {
	const [total, setTotal] = React.useState(4);
	const [query, setQuery] = React.useState("");
	const [response, setResponse] = React.useState("");
	const [loading, setLoading] = React.useState(true);
	const setInput = (setter) => (e) => {
		setter(e.target.value);
	};
	const handleClick = async () => {
		if (query === "" || total <= 0) {
			setResponse("Please enter a valid URL or length");
			return;
		}

		try {
			// let data = await ...
		} catch (error) {
			setResponse("Something went wrong! Please try again later.");
		}
	};
	return (
		<Card isHoverable variant='bordered' css={{ mw: "100%", mt: "50px" }}>
			<Card.Body>
				<Input
					required
					onChange={setInput(setQuery)}
					value={query}
					underlined
					labelLeft='Query'
					placeholder='e.g. id : name : email'
					css={{ mb: "20px", w: "100%", p: "10px" }}
					contentRight={
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Input
								onChange={setInput(setTotal)}
								value={total}
								labelLeft='Total'
								width='100%'
								type='number'
								css={{ mb: "15px", mr: "20px" }}
								// defaultValue={5}
								// minLength={1}
								// maxLength={10}
							/>
							<Button
								onClick={handleClick}
								shadow
								color='warning'
								auto
								css={{ mb: "15px" }}>
								Search
							</Button>
						</div>
					}
					contentRightStyling={false}
				/>
				{!loading ? (
					<div
						style={{
							paddingLeft: "15px",
							paddingRight: "15px",
						}}>
						{response &&
							response.split("\n").map((item, i) => {
								return i === 0 ? (
									<p
										key={i}
										style={{
											textAlign: "justify",
											fontSize: "20px",
											marginBottom: "20px",
											fontWeight: "bold",
										}}>
										{item}
									</p>
								) : (
									<p
										key={i}
										style={{
											textAlign: "justify",
											fontSize: "20px",
											marginBottom: "20px",
										}}>
										{item}
									</p>
								);
							})}
					</div>
				) : (
					<Loading type='points' color='warning' />
				)}
			</Card.Body>
		</Card>
	);
}
