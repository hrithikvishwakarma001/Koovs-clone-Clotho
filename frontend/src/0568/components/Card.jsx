import { Button, Card, Input, Loading, Row } from "@nextui-org/react";
import Tables from "./Table";
import React from "react";
import { searchByQuery } from "../api/users.api";
import UserCard from "./UserCard";
export default function Cards() {
	const [query, setQuery] = React.useState("");
	const [response, setResponse] = React.useState("");
	const [total, setTotal] = React.useState(0);
	const setInput = (setter) => (e) => {
		setter(e.target.value);
	};
	const handleClick = async () => {
		if (query === "") {
			setResponse("Please enter a valid URL or length");
			return;
		}

		try {
			// let data = await ...
			console.log(query);
			const res = await searchByQuery(query);
			console.log("👻 -> file: Card.jsx:22 -> handleClick -> res:", res);
			setResponse(res);
			setTotal(res.length);
		} catch (error) {
			setResponse("Something went wrong! Please try again later.");
		}
	};
	return (
		<Card isHoverable variant='bordered' css={{ mw: "100%" }}>
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
								readOnly
								value={total}
								labelLeft='Total'
								width='80%'
								type='number'
								css={{ mb: "15px", mr: "20px" }}
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
				{response.length>0 ? (
					<div
						style={{
							paddingLeft: "15px",
							paddingRight: "15px",
						}}>
						<UserCard data={response}/>
					</div>
				) : (
					<Loading type='points' color='warning' />
				)}
			</Card.Body>
			{/* <Card.Footer isBlurred>
				<Row
					align='center'
					justify='center'
					css={{ display: "flex", justifyContent: "center",w:'100%' }}
					gap={0}
					
				>
					<Tables />
				</Row>
			</Card.Footer> */}
		</Card>
	);
}
