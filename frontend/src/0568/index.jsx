import { NextUIProvider } from "@nextui-org/react";
import Admin from "./pages/Admin";

export default function NextUIAdminPage() {
	return (
		<NextUIProvider>
			<Admin />
		</NextUIProvider>
	);
}
