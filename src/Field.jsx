import { FieldLayout } from "./layout/FieldLayout";

export const Field = () => {
	const props = {
		rows: 3,
		cols: 3,
	};
	return <FieldLayout {...props} />;
};
