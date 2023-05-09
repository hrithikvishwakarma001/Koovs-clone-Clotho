import React from "react";
import { Dropdown } from "@nextui-org/react";
export default function OrderDropDown() {
	const [selected, setSelected] = React.useState(new Set(["pending"]));

	const selectedValue = React.useMemo(() => {
		return Array.from(selected).join(", ").replaceAll("_", " ");
	}, [selected]);


	return (
		<Dropdown>
			<Dropdown.Button flat color='secondary' css={{ tt: "capitalize" }}>
				{selectedValue}
			</Dropdown.Button>
			<Dropdown.Menu
				aria-label='Single selection actions'
				color='secondary'
				disallowEmptySelection
				selectionMode='single'
				selectedKeys={selected}
				onSelectionChange={setSelected}>
				<Dropdown.Item key='shipping'>Shipping</Dropdown.Item>
				<Dropdown.Item key='review'>Review</Dropdown.Item>
				<Dropdown.Item key='rejected'>Rejected</Dropdown.Item>
				<Dropdown.Item key='pending'>Pending</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}
