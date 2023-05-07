import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function CustomSelect({setData}) {
	const [selected, setSelected] = React.useState(new Set(["Category"]));

	const selectedValue = React.useMemo(
		() => Array.from(selected).join(", ").replaceAll("_", " "),
		[selected]
	);

  React.useEffect(() => {
    setData(prev=>({...prev,category:selectedValue}))
  }, [selectedValue])

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
				<Dropdown.Item key='mens'>mens</Dropdown.Item>
				<Dropdown.Item key='mens_tshirt'>mens_tshirt</Dropdown.Item>
				<Dropdown.Item key='womens'>womens</Dropdown.Item>
				<Dropdown.Item key='womens_top'>womens_top</Dropdown.Item>
				<Dropdown.Item key='kids'>kids</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}
