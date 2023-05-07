import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function GenderSelect({ setData }) {
	const [selected, setSelected] = React.useState(new Set(["Male"]));

	const selectedValue = React.useMemo(
		() => Array.from(selected).join(", ").replaceAll("_", " "),
		[selected]
	);

	React.useEffect(() => {
		setData((prev) => ({ ...prev, gender: selectedValue }));
	}, [selectedValue]);

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
				<Dropdown.Item key='male'>Male</Dropdown.Item>
				<Dropdown.Item key='female'>Female</Dropdown.Item>
				<Dropdown.Item key='prefer not to say'>
					Prefer not to say
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}
