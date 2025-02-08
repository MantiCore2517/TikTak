import { AppLayout } from "./layout/AppLayout";
import { Field } from "./Field";
import { Information } from "./Information";

export const App = () => {
	const props = {
		information: <Information />,
		field: <Field />,
	};
	return <AppLayout {...props} />;
};
